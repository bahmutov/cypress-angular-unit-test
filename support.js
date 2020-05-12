/// <reference types="cypress" />
// TODO what do we need from here as peer or production dependencies?
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

beforeEach(() => {
  debugger
  const html = `
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <cypress-root></cypress-root>
    </body>
  `;
  const document = cy.state('document');
  document.write(html);
  document.close();
})
