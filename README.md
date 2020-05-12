## cypress-angular-unit-test BETA [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-4.5.0-brightgreen) [![ci status][ci image]][ci url]

## Installation

```shell
npm install -D cypress cypress-angular-unit-test
```

Add to your support file

```js
// cypress/support/index.js
require('cypress-angular-unit-test/support')
```

Enable experimental component testing mode in `cypress.json` and point at the spec files. Usually they are alongside your application files in `src` folder.

```json
{
  "experimentalComponentTesting": true,
  "componentFolder": "src",
  "testFiles": "**/*cy-spec.*"
}
```

## Use

```js
import { mount } from 'cypress-angular-unit-test'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('shows the input', () => {
    // component + any inputs object
    mount(AppComponent, {title: 'World'})
    // use any Cypress command afterwards
    cy.contains('Welcome to World!')
  })
})
```

## Examples

### Internal

- [examples/ng7](examples/ng7)

### External

- [Tour of Heroes](https://github.com/bahmutov/ng9-tour-of-heroes)

## Working

I have successfully used this mounting approach to test components in other frameworks.

* [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test)
* [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test)
* [cypress-cycle-unit-test](https://github.com/bahmutov/cypress-cycle-unit-test)
* [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)
* [cypress-angular-unit-test](https://github.com/bahmutov/cypress-angular-unit-test)
* [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test)
* [cypress-angularjs-unit-test](https://github.com/bahmutov/cypress-angularjs-unit-test)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[ci image]: https://github.com/bahmutov/cypress-angular-unit-test/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cypress-angular-unit-test/actions
