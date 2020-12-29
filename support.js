import 'zone.js/dist/zone';
// @ts-ignore
global.Mocha['__zone_patch__'] = false;
import 'zone.js/dist/zone-testing';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/mocha-patch';
// @ts-ignore
const isComponentSpec = () => Cypress.spec.specType === 'component';

// When running component specs, we cannot allow "cy.visit"
// because it will wipe out our preparation work, and does not make much sense
// thus we overwrite "cy.visit" to throw an error
Cypress.Commands.overwrite('visit', (visit, ...args) => {
  if (isComponentSpec()) {
    throw new Error('cy.visit from a component spec is not allowed');
  } else {
    // allow regular visit to proceed
    return visit(...args);
  }
});

beforeEach(() => {
  const html = `
    <head>
      <meta charset="UTF-8">
      <base href="/">
    </head>
    <body>
      <root0 id="root"></root0>
    </body>
  `;
  // @ts-ignore
  const document = cy.state('document');
  document.write(html);
  document.close();
});
