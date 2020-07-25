import { HttpClientModule } from '@angular/common/http';
import { ComponentFixtureAutoDetect, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'core-js/es/reflect';
import 'core-js/features/reflect';
import 'core-js/stable/reflect';
import 'zone.js/dist/zone';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { NetworkService } from './network.service';
import { NetworkComponent } from './network/network.component';

export const rootId = 'root0';

export const initEnv = (component: any, moduleDef?: TestModuleMetadata) => {

  TestBed.resetTestEnvironment();

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  TestBed.configureCompiler({
    providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
  });

  TestBed.configureTestingModule({
    declarations: [component],
    imports: moduleDef ? moduleDef.imports : [],
    providers: moduleDef ? moduleDef.providers : []
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
    initEnv(AppComponent);

    // component + any inputs object
    const fixture = mountt(AppComponent, { title: 'World' });
    console.log(fixture);

    // use any Cypress command afterwards
    cy.contains('World app is running!');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });

  it('shows', () => {
    initEnv(AppComponent);

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

  it('network', () => {
    initEnv(NetworkComponent, { providers: [NetworkService], imports: [HttpClientModule] });
    mountt(NetworkComponent);
    cy.get('li', { timeout: 20000 }).should('have.length', 3);
  });

  it('can inspect real data in XHR', () => {
    cy.server();
    cy.route('/users?_limit=3').as('users')
    initEnv(NetworkComponent, { providers: [NetworkService], imports: [HttpClientModule] });
    mountt(NetworkComponent);
    cy.wait('@users')
      .its('response.body')
      .should('have.length', 3)
      .its('0')
      .should('include.keys', ['id', 'name', 'username', 'email'])
  });

  it.only('can display mock XHR response', () => {
    cy.server();
    const users = [{ id: 1, name: 'foo' }]
    cy.route('GET', '/users?_limit=3', users).as('users')
    initEnv(NetworkComponent, { providers: [NetworkService], imports: [HttpClientModule] });
    mountt(NetworkComponent);
    cy.get('li')
      .should('have.length', 1)
      .first()
      .contains('foo')
  })

});
