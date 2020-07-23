/// <reference types="cypress" />
// TODO what do we need from here as peer or production dependencies?
require('zone.js/dist/zone')

beforeEach(() => {
  const html = `
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <root0></root0>
    </body>
  `;
  const document = cy.state('document');
  document.write(html);
  document.close();
})
