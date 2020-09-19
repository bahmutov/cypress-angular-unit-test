import { initEnv, mount, setConfig } from 'cypress-angular-unit-test';
import { BootstrapButtonComponent } from './bootstrap-button.component';

describe('BootstrapButtonComponent', () => {

  beforeEach(() => {
    setConfig({ stylesheet: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' });
    initEnv(BootstrapButtonComponent);
  });

  it('should create', () => {
    mount(BootstrapButtonComponent);
    // Should have BootStrap color style
    cy.get('button').should('have.css', 'background-color', 'rgb(0, 123, 255)');
  });

});
