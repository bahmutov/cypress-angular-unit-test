import { StoreModule } from '@ngrx/store';
import { initEnv, mount } from 'cypress-angular-unit-test';
import * as reducer from '../counter.reducer';
import { MyCounterComponent } from './my-counter.component';

describe('NGRX', () => {
  beforeEach(() => {
    initEnv(MyCounterComponent, {
      imports: [
        StoreModule.forRoot({
          count: reducer.counterReducer,
        }),
      ],
    });
  });

  it('NGRX counter', () => {
    mount(MyCounterComponent);
    cy.get('#value').contains('Current Count: 0');
    cy.get('#increment').click().click().click();
    cy.get('#value').contains('Current Count: 3');
    cy.get('#decrement').click();
    cy.get('#value').contains('Current Count: 2');
    cy.get('#reset').click();
    cy.get('#value').contains('Current Count: 0');
  });
});
