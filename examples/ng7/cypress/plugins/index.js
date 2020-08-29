const { addAngularUnitTestPlugin } = require('cypress-angular-unit-test/dist/plugin');

module.exports = on => {
  addAngularUnitTestPlugin(on);
}
