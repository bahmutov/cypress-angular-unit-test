import { ComponentFixtureAutoDetect, getTestBed, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'zone.js/dist/zone';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HeroService } from './hero.service';

export const rootId = 'root0';

export const initEnv = (module: any, moduleDef?: TestModuleMetadata) => {

  if (!getTestBed().platform || !getTestBed().ngModule) {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  }

  TestBed.configureCompiler({
    providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
  });

  TestBed.configureTestingModule({
    imports: [module],
  });
};

export const mountt = (component: any, inputs?: object, moduleDef?: TestModuleMetadata) => {
  // TODO improve logging using a full log instance
  cy.log(`Mounting **${component.name}**`);

  TestBed.compileComponents();
  const fixture = TestBed.createComponent(component);
  let componentInstance = fixture.componentInstance;
  componentInstance = Object.assign(componentInstance, inputs);
  fixture.detectChanges();
  return fixture;
};

describe('AppComponent', () => {
  beforeEach(() => {
    const html = `
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <root0></root0>
    </body>
  `;
    const document = cy.state('document');
    document.write(html);
    document.close();
  });

  it('shows the input', () => {
    initEnv(AppModule);

    // component + any inputs object
    const fixture = mountt(AppComponent, { title: 'World' });
    console.log(fixture);

    // use any Cypress command afterwards
    cy.contains('World app is running!');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });

  it('shows', () => {
    initEnv(AppModule);

    const componentService = TestBed.inject(HeroService);
    cy.stub(componentService, 'getHeroes').returns(['tutu']);

    // component + any inputs object
    const fixture = mountt(AppComponent, { title: 'World' });
    console.log(fixture);

    // use any Cypress command afterwards
    cy.contains('World app is running!');
    cy.contains('tutu');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
