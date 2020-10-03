import { ComponentFixtureAutoDetect, getTestBed, TestBed, TestModuleMetadata, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ProxyComponent } from './proxy.component';
import { CypressAngularConfig } from './config';
import { Type } from '@angular/core';
import { injectStylesBeforeElement } from './css-utils';

let config = new CypressAngularConfig();

export function setConfig(c: CypressAngularConfig): void {
  config = c;
}

function init<T>(component: Type<T>, moduleDef?: TestModuleMetadata): void {
  checkIsComponentSpec();

  TestBed.resetTestEnvironment();

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  )

  const declarations = [component];
  const providers = [];
  // automatic component change detection
  if (config.detectChanges) {
    providers.push({ provide: ComponentFixtureAutoDetect, useValue: true });
  }
  if (moduleDef) {
    if (moduleDef.declarations) {
      declarations.push(...moduleDef.declarations);
    }
    if (moduleDef.providers) {
      providers.push(...moduleDef.providers);
    }
  }
  TestBed.configureTestingModule({
    declarations,
    imports: moduleDef ? moduleDef.imports : [],
    providers,
    schemas: moduleDef ? moduleDef.schemas : []
  });

  // @ts-ignore
  const document: Document = cy.state('document');
  const el = document.getElementById('root');
  if (el === null) {
    throw new Error("root element not found");
  }
  injectStylesBeforeElement(config, document, el);
};

export function initEnv<T>(component: Type<T>, moduleDef?: TestModuleMetadata): void {
  init(component, moduleDef);
  TestBed.compileComponents();
};

export function mount<T>(component: Type<T>, inputs?: object): ComponentFixture<T> {
  checkIsComponentSpec();

  // TODO improve logging using a full log instance
  cy.log(`Mounting **${component.name}**`);
  const fixture = TestBed.createComponent(component);
  let componentInstance = fixture.componentInstance;
  componentInstance = Object.assign(componentInstance, inputs);
  if (config.detectChanges) {
    fixture.whenStable().then(() => fixture.detectChanges());
    fixture.detectChanges();
  }
  return fixture;
};

export function initEnvHtml<T>(component?: Type<T>, moduleDef?: TestModuleMetadata): void {
  if (moduleDef) {
    if (moduleDef.declarations) {
      moduleDef.declarations.push(component);
    } else {
      moduleDef.declarations = [component];
    }
  } else {
    moduleDef = { declarations: [component] };
  }
  init(ProxyComponent, moduleDef);
};

export function mountHtml(htmlTemplate: string): ComponentFixture<ProxyComponent> {
  checkIsComponentSpec();

  cy.log(`Mounting **${htmlTemplate}**`);
  TestBed.overrideComponent(ProxyComponent, { set: { template: htmlTemplate } });
  TestBed.compileComponents();
  const fixture = TestBed.createComponent(ProxyComponent);
  if (config.detectChanges) {
    fixture.whenStable().then(() => fixture.detectChanges());
    fixture.detectChanges();
  }
  return fixture;
};

export function getCypressTestBed(): TestBed {
  return getTestBed();
};

function checkIsComponentSpec(): void {
  if (!isComponentSpec()) {
    throw new Error(
      'Angular component test from an integration spec is not allowed',
    )
  }
};

// @ts-ignore
function isComponentSpec(): boolean { return Cypress.spec.specType === 'component'; }
