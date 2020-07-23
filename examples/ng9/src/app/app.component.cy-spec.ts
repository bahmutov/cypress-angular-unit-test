/// <reference types="cypress" />
import { initEnv, mount } from '../../../../lib';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  it('shows the input', () => {
    initEnv(AppModule);
    mount(AppComponent, { title: 'World' });
    // use any Cypress command afterwards
    cy.contains('World app is running!');
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
