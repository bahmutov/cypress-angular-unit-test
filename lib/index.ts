import { Type } from '@angular/core';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  getTestBed,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { CypressAngularConfig } from './config';
import { injectStylesBeforeElement } from './css-utils';
import { ProxyComponent } from './proxy.component';

let config = new CypressAngularConfig();

export function setConfig(c: CypressAngularConfig): void {
  config = c;
}

function init<T>(
  component: Type<T>,
  options?: Partial<TestModuleMetadata> & Partial<CypressAngularConfig>,
): void {
  Cypress.log({ displayName: 'Unit Test', message: ['Init Environment'] });
  checkIsComponentSpec();

  TestBed.resetTestEnvironment();

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
  );

  const declarations = [component];
  const providers = [];
  // automatic component change detection
  if (config.detectChanges) {
    providers.push({ provide: ComponentFixtureAutoDetect, useValue: true });
  }
  if (options) {
    config = { ...config, ...options };
    if (options.declarations) {
      declarations.push(...options.declarations);
    }
    if (options.providers) {
      providers.push(...options.providers);
    }
  }
  TestBed.configureTestingModule({
    declarations,
    imports: options ? options.imports : [],
    providers,
    schemas: options ? options.schemas : [],
  });

  // @ts-ignore
  const document: Document = cy.state('document');
  const el = document.getElementById('root');
  if (el === null) {
    throw new Error('root element not found');
  }
  injectStylesBeforeElement(config, document, el);
}

export function initEnv<T>(
  component: Type<T>,
  options?: Partial<TestModuleMetadata> & Partial<CypressAngularConfig>,
): void {
  init(component, options);
  TestBed.compileComponents();
}

export function mount<T>(
  component: Type<T>,
  inputs?: object,
): ComponentFixture<T> {
  checkIsComponentSpec();

  // TODO improve logging using a full log instance
  Cypress.log({
    displayName: 'Unit Test',
    message: [`Mounting **${component.name}**`],
  });
  const fixture = TestBed.createComponent(component);
  let componentInstance = fixture.componentInstance;
  componentInstance = Object.assign(componentInstance, inputs);
  if (config.detectChanges) {
    fixture.whenStable().then(() => fixture.detectChanges());
    fixture.detectChanges();
  }
  return fixture;
}

export function initEnvHtml<T>(
  component?: Type<T>,
  options?: Partial<TestModuleMetadata> & Partial<CypressAngularConfig>,
): void {
  if (options) {
    if (options.declarations) {
      options.declarations.push(component);
    } else {
      options.declarations = [component];
    }
  } else {
    options = { declarations: [component] };
  }
  init(ProxyComponent, options);
}

export function mountHtml(
  htmlTemplate: string,
): ComponentFixture<ProxyComponent> {
  checkIsComponentSpec();

  Cypress.log({
    displayName: 'Unit Test',
    message: [`Mounting **${htmlTemplate}**`],
  });
  TestBed.overrideComponent(ProxyComponent, {
    set: { template: htmlTemplate },
  });
  TestBed.compileComponents();
  const fixture = TestBed.createComponent(ProxyComponent);
  if (config.detectChanges) {
    fixture.whenStable().then(() => fixture.detectChanges());
    fixture.detectChanges();
  }
  return fixture;
}

export function getCypressTestBed(): TestBed {
  return getTestBed();
}

function checkIsComponentSpec(): void {
  if (!isComponentSpec()) {
    throw new Error(
      'Angular component test from an integration spec is not allowed',
    );
  }
}

// @ts-ignore
function isComponentSpec(): boolean {
  return Cypress.spec.specType === 'component';
}
