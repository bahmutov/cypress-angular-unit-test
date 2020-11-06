/// <reference types="cypress" />
import 'zone.js/dist/zone';
import { getWorkspaceRaw } from '@angular/cli/utilities/config';
import * as fs from 'fs';

// @ts-ignore
const isComponentSpec = () => Cypress.spec.specType === 'component'

// When running component specs, we cannot allow "cy.visit"
// because it will wipe out our preparation work, and does not make much sense
// thus we overwrite "cy.visit" to throw an error
Cypress.Commands.overwrite('visit', (visit, ...args) => {
  if (isComponentSpec()) {
    throw new Error(
      'cy.visit from a component spec is not allowed',
    )
  } else {
    // allow regular visit to proceed
    return visit(...args)
  }
})

const workspace = getWorkspaceRaw()[0];
if (!workspace) {
  throw new Error('No workspace');
}
const obj = JSON.parse(workspace.text);
const styles = obj.projects['angular-project']['architect']['build']['options']['styles'];
const st = fs.readFileSync(styles[1], 'utf8');

beforeEach(() => {
  const html = `
    <head>
      <style>${st}</style>
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
})
