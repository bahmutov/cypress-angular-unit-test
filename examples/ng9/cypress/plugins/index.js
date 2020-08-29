const { addAngularUnitTestPlugin } = require('cypress-angular-unit-test/dist/plugin');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  addAngularUnitTestPlugin(on)
  return config;
}
