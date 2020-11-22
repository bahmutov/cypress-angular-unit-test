import { initEnv, mount, setConfig } from 'cypress-angular-unit-test';
import { AddStyleComponent } from './add-style.component';

describe('AddStyleComponent', () => {
  beforeEach(() => {
    setConfig({ style: 'p {background-color: blue;}' });
    initEnv(AddStyleComponent);
  });

  it('should create', () => {
    mount(AddStyleComponent);
    cy.get('p')
      .should('contain', 'add-style works!')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
});
