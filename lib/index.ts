import { ComponentFixtureAutoDetect, getTestBed, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

export const rootId = 'root0'

export const initEnv = (module: any, moduleDef?: TestModuleMetadata) => {

  if (!getTestBed().platform || !getTestBed().ngModule) {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  }

  TestBed.configureCompiler({
    providers: [
      { provide: ComponentFixtureAutoDetect, useValue: true },
    ]
  });

  TestBed.configureTestingModule({
    imports: [module],
  });
};

export const mount = (component: any, inputs?: object, moduleDef?: TestModuleMetadata) => {
  // TODO improve logging using a full log instance
  cy.log(`Mounting **${component.name}**`);

  TestBed.compileComponents();
  const fixture = TestBed.createComponent(component);
  let componentInstance = fixture.componentInstance;
  componentInstance = Object.assign(componentInstance, inputs);
  fixture.detectChanges();
  return fixture;
};
