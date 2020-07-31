import { ComponentFixtureAutoDetect, getTestBed, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

export const initEnv = (component: any, moduleDef?: TestModuleMetadata) => {
  checkIsComponentSpec();

  TestBed.resetTestEnvironment();

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  )

  // automatic component change detection
  moduleDef?.providers?.push({ provide: ComponentFixtureAutoDetect, useValue: true })

  TestBed.configureTestingModule({
    declarations: [component],
    providers: moduleDef?.providers,
    imports: moduleDef?.imports
  }).compileComponents();
};

export const mount = (component: any, inputs?: object) => {
  checkIsComponentSpec();

  // TODO improve logging using a full log instance
  cy.log(`Mounting **${component.name}**`);
  const fixture = TestBed.createComponent(component);
  let componentInstance = fixture.componentInstance;
  componentInstance = Object.assign(componentInstance, inputs);
  fixture.whenStable().then(() => fixture.detectChanges());
  fixture.detectChanges();
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
