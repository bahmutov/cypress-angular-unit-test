import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { initEnv, mount } from 'cypress-angular-unit-test';
import { UseCustomElementComponent } from './use-custom-element.component';
// You have to import your custom element
// And in cypress.json activate "includeShadowDom" configuration
import '../my-custom-element';

describe('AddStyleComponent', () => {

  it('component with custom element shadow dom', () => {
    initEnv(UseCustomElementComponent, { schemas: [CUSTOM_ELEMENTS_SCHEMA], });
    const fix = mount(UseCustomElementComponent);
    cy.contains('use-custom-element works!');
    cy.get('my-custom-element').shadow().get('button')
      .should('have.text', 'Custom element button')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });

});
