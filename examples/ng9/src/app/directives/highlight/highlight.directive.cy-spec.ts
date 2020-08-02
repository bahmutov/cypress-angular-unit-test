import { initEnvHtml, mountHtml } from 'cypress-angular-unit-test';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {

  beforeEach(() => {
    initEnvHtml(HighlightDirective);
  });

  it('should create an instance', () => {
    const fixture = mountHtml('<p appHighlight>Highlight me!</p>');
    fixture.detectChanges();
    cy.get('p').contains('Highlight me!');
  });

});
