/* tslint:disable:no-unused-variable */
import { initEnv, mount } from 'cypress-angular-unit-test';
import { InputComponent } from './input.component';

describe('InputComponent', () => {

  beforeEach(() => {
    initEnv(InputComponent);
  });

  it('should show default value input', () => {
    const f = mount(InputComponent);
    cy.contains('My input value 4');
  });


  it('should replace default value input', () => {
    const f = mount(InputComponent, { myInput: 9 });
    cy.contains('My input value 9');
  });

});
