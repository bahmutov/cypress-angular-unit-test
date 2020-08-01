import { ComponentFixtureAutoDetect, getTestBed, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ProxyComponent } from './proxy.component';
import { CypressAngularConfig } from './config';

let config = new CypressAngularConfig();

export const setConfig = (c: CypressAngularConfig) => {
  config = c;
}

export const initEnv = (component: any, moduleDef?: TestModuleMetadata) => {
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
    providers
  }).compileComponents();
};

export const mount = (component: any, inputs?: object) => {
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

export const initEnvHtml = (component: any): void => {
  initEnv(ProxyComponent, { declarations: [component] });
};

export const mountHtml = (htmlTemplate: string) => {
  checkIsComponentSpec();

  cy.log(`Mounting **${htmlTemplate}**`);
  TestBed.compileComponents();
  TestBed.overrideComponent(ProxyComponent, { set: { template: htmlTemplate } });
  const fixture = TestBed.createComponent(ProxyComponent);
  if (config.detectChanges) {
    fixture.whenStable().then(() => fixture.detectChanges());
    fixture.detectChanges();
  }
  return fixture;
};

export const getCypressTestBed = () => {
  return getTestBed();
};

const checkIsComponentSpec = () => {
  if (!isComponentSpec()) {
    throw new Error(
      'Angular component test from an integration spec is not allowed',
    )
  }
};

// @ts-ignore
const isComponentSpec = () => Cypress.spec.specType === 'component'
