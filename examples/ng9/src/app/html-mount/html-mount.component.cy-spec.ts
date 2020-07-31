import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMountComponent } from './html-mount.component';
import { initEnvHtml, mountHtml } from 'cypress-angular-unit-test';

describe('HtmlMountComponent', () => {

  beforeEach(() => {
    initEnvHtml(HtmlMountComponent);
  });

  it('mount work', () => {
    const fixture = mountHtml('<app-html-mount></app-html-mount>');
    fixture.detectChanges();
    cy.contains('works !');
  });

});
