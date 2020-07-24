/// <reference types="cypress" />
import { mount, initEnv, getCypressTestBed } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';

describe('AppComponent', () => {

  beforeEach(() => {
    initEnv(AppComponent, { providers: [HeroService] });
  });

  it('shows the input', () => {
    const componentService = getCypressTestBed().inject(HeroService);
    cy.stub(componentService, 'getHeroes').returns(['tutu']);

    mount(AppComponent, { title: 'World' });

    cy.contains('World app is running!');
    cy.contains('tutu');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
