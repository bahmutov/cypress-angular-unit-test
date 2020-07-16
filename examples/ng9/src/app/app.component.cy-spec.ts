/// <reference types="cypress" />
import {AppComponent} from './app.component';
import {mount} from '../../../../lib';

describe('AppComponent', () => {
  it('shows the input', () => {
    // component + any inputs object
    mount(AppComponent, {title: 'World'});
    // use any Cypress command afterwards
    cy.contains('World app is running!');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
