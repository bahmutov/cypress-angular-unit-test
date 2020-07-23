/// <reference types="cypress" />
import { mount, initEnv } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  it('shows the input', () => {
    initEnv(AppComponent, { providers: [HeroService] });
    const componentService = TestBed.inject(HeroService);
    cy.stub(componentService, 'getHeroes').returns(['tutu']);
    mount(AppComponent, { title: 'World' });
    // use any Cypress command afterwards
    cy.contains('World app is running!');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
