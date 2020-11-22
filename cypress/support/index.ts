import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import '../../lib/support';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import '@cypress/code-coverage/support';

addMatchImageSnapshotCommand();
