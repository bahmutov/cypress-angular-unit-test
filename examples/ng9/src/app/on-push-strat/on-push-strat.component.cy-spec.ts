import { initEnv, mount } from 'cypress-angular-unit-test';
import { OnPushStratComponent } from './on-push-strat.component';

describe('OnPush strategy', () => {

  beforeEach(() => {
    initEnv(OnPushStratComponent);
  });

  it('mount work', () => {
    const data = 'It works onPush';
    mount(OnPushStratComponent, { data });
    cy.contains(data);
  });

});
