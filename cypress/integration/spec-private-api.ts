import { ɵrenderComponent as renderComponent, ɵcompileComponent as compileComponent} from '@angular/core';
import '@angular/compiler';
import 'zone.js';
import { AppComponent } from '../../src/app/app.component';

/* eslint-env mocha */
/* global cy */
describe('AppComponent', () => {
  beforeEach(() => {
    const html = `
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <app-root></app-root>
      </body>
    `;
    const document = (cy as any).state('document');
    document.write(html);
    document.close();

    // Quick hack to get the component definition, which in our case is the first annotation.
    compileComponent(AppComponent, (<any>AppComponent).__annotations__[0]);
    renderComponent(AppComponent, {
      host: document.body
    });
  });

  it('works', () => {
    cy.contains('Welcome to angular-cypress-unit!').should('be.visible');
  });

  it('works again', () => {
    cy.contains('Welcome to angular-cypress-unit!').should('be.visible');
  });

});
