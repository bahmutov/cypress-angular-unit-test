## cypress-angular-unit-test BETA [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-4.5.0-brightgreen) [![ci status][ci image]][ci url]

## Goal

```shell
npm install -D cypress cypress-angular-unit-test
```

```js
import { mount } from 'cypress-angular-unit-test'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('shows the input', () => {
    mount(AppComponent, {title: 'World'})
    cy.contains('Welcome to World!')
  })
})
```

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
