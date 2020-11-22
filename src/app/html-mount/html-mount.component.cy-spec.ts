import { initEnvHtml, mountHtml } from 'cypress-angular-unit-test';
import { HtmlMountComponent } from './html-mount.component';

describe('HtmlMountComponent', () => {
  beforeEach(() => {
    initEnvHtml(HtmlMountComponent);
  });

  it('mount work', () => {
    const fixture = mountHtml('<app-html-mount></app-html-mount>');
    fixture.detectChanges();
    cy.contains('works !');
  });

  it('mount with input work', () => {
    const fixture = mountHtml(
      `<app-html-mount [data]="'my input'"></app-html-mount>`,
    );
    fixture.detectChanges();
    cy.contains('works !');
    cy.contains('my input');
  });
});
