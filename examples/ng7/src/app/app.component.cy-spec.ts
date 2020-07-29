/// <reference types="cypress" />
import { mount, initEnv } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('works', () => {
    initEnv(AppComponent);
    mount(AppComponent);
    cy.contains('Welcome to angular-cypress-unit!');
    // styles are applied
    cy.get('ul').should('have.css', 'background-color', 'rgb(0, 255, 255)');
  });

  it('passes an input', () => {
    initEnv(AppComponent);
    mount(AppComponent, { title: 'World' });
    // component inputs are processed
    cy.contains('Welcome to World!');
  });
});
