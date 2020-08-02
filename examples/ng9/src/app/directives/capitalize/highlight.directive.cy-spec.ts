import { HighlightDirective } from './highlight.directive';
import { initEnvHtml, mountHtml } from 'cypress-angular-unit-test';

describe('HighlightDirective', () => {

  beforeEach(() => {
    initEnvHtml(HighlightDirective);
  });

  it('should create an instance', () => {
    const fixture = mountHtml('<p appHighlight>bonjour</p>');
    fixture.detectChanges();
    cy.get('p').contains('BONJOUR');
  });

});
