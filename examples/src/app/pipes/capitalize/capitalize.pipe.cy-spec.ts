import { initEnvHtml, mountHtml } from 'cypress-angular-unit-test';
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

  beforeEach(() => {
    initEnvHtml(CapitalizePipe);
  });

  it('should create an instance', () => {
    const fixture = mountHtml(`<p>{{ 'hey' | capitalize }}</p>`);
    fixture.detectChanges();
    cy.get('p').contains('HEY');
  });

});
