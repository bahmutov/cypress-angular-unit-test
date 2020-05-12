/// <reference types="cypress" />
// TODO what do we need from here as peer or production dependencies?
require('core-js/es6/reflect')
require('core-js/es7/reflect')
require('zone.js/dist/zone')

beforeEach(() => {
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
