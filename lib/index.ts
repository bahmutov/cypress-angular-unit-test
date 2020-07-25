import { ComponentFixtureAutoDetect, getTestBed, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

export const rootId = 'root0'

export const initEnv = (component: any, moduleDef?: TestModuleMetadata) => {
  TestBed.resetTestEnvironment();

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  )

  TestBed.configureCompiler({
    providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
  });

  TestBed.configureTestingModule({
    declarations: [component],
    providers: moduleDef?.providers,
    imports: moduleDef?.imports
  }).compileComponents();
};

export const mount = (component: any, inputs?: object) => {
  // TODO improve logging using a full log instance
  cy.log(`Mounting **${component.name}**`);
  const fixture = TestBed.createComponent(component);
  let componentInstance = fixture.componentInstance;
  componentInstance = Object.assign(componentInstance, inputs);
  fixture.detectChanges();
  return fixture;
};

export const getCypressTestBed = () => {
  return getTestBed();
};