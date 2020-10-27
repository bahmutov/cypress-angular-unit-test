import { initEnv, mount } from 'cypress-angular-unit-test';
import { AssetsImageComponent } from './assets-image.component';

describe('AssetsImageComponent', () => {
  it('should create', () => {
    initEnv(AssetsImageComponent);
    mount(AssetsImageComponent);
    // add "fileServerFolder": "src" in cypress.json
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});