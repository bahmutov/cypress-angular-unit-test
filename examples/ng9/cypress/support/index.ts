import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'cypress-angular-unit-test/support';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import '@cypress/code-coverage/support';

addMatchImageSnapshotCommand();
