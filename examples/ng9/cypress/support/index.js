// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

//require('cypress-angular-unit-test/support')

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('core-js/es/reflect')
require('core-js/stable/reflect')
require('core-js/features/reflect')
require('cypress-angular-unit-test/dist/support')
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();