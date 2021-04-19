import { NgModule, Type } from '@angular/core';
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
  component:
    | Type<T>
    | (Partial<TestModuleMetadata> & Partial<CypressAngularConfig>),
  options?: Partial<TestModuleMetadata> & Partial<CypressAngularConfig>,
): void {
  Cypress.log({ displayName: 'Unit Test', message: ['Init Environment'] });
  checkIsComponentSpec();

  TestBed.resetTestEnvironment();

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
  );
  const module: TestModuleMetadata = {
    declarations: [ProxyComponent],
    imports: [],
    providers: [],
    schemas: [],
  };
  const isComp = component instanceof Type;
  console.log(component);
  if (isComp) {
    module.declarations.push(component);
  } else {
    if (component.declarations) {
      module.declarations.push(...component.declarations);
    }
    if (component.imports) {
      module.imports.push(...component.imports);
    }
    if (component.providers) {
      module.providers.push(...component.providers);
    }
    if (component.schemas) {
      module.schemas.push(...component.schemas);
    }
  }
  // automatic component change detection
  if (config.detectChanges) {
    module.providers.push({
      provide: ComponentFixtureAutoDetect,
      useValue: true,
    });
  }
  if (options) {
    config = { ...config, ...options };
    if (options.declarations) {
      module.declarations.push(...options.declarations);
    }
    if (options.providers) {
      module.providers.push(...options.providers);
    }
  }
  console.log(module);
  TestBed.configureTestingModule(module);

  // @ts-ignore
  const document: Document = cy.state('document');
  const el = document.getElementById('root');
  if (el === null) {
    throw new Error('root element not found');
  }
  injectStylesBeforeElement(config, document, el);
}

export function initEnv<T>(
  component:
    | Type<T>
    | Partial<TestModuleMetadata>
    | Partial<CypressAngularConfig>,
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
  component?:
    | Type<T>
    | Partial<TestModuleMetadata>
    | Partial<CypressAngularConfig>,
  options?: Partial<TestModuleMetadata> & Partial<CypressAngularConfig>,
): void {
  init(component, options);
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
