import * as cypressTypeScriptPreprocessor from './cy-ts-preprocessor';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
