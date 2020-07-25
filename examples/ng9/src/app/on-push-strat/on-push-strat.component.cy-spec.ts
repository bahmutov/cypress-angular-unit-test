import { initEnv, mount } from 'cypress-angular-unit-test';
import { OnPushStratComponent } from './on-push-strat.component';

describe('AppComponent', () => {

  beforeEach(() => {
    initEnv(OnPushStratComponent);
  });

  it('shows the input', () => {
    const data = 'It works onPush';
    mount(OnPushStratComponent, { data });
    cy.contains(data);
  });
});
