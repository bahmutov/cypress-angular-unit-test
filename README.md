## cypress-angular-unit-test BETA [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-5.2.0-brightgreen) [![ci status][ci image]][ci url]

## Installation

```shell
npm install -D cypress cypress-angular-unit-test
```

Add to your support file

```js
// cypress/support/index.js
// core-js 3.*
require('core-js/es/reflect')
// core-js 2.*
require('core-js/es7/reflect')
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

Configure `cypress/plugins/index.js` to transpile Angular code.

```
TODO still under development
```

## Use

```js
import { mount } from 'cypress-angular-unit-test'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('shows the input', () => {
    // Init Angular stuff
    initEnv(AppComponent);
    // component + any inputs object
    mount(AppComponent, {title: 'World'})
    // use any Cypress command afterwards
    cy.contains('Welcome to World!')
  })
})
```

![Demo](images/demo.gif)

Under the hood, it's based on [TestBed](https://angular.io/api/core/testing/TestBed), you can use it by calling :

```js
getCypressTestBed()

// Don't call TestBed.* directly in your spec !

// So, to inject a Service you can do :
const componentService = getCypressTestBed().inject(SomeService);
```

## Examples

Use case | Description
--- | ---
[Input](examples/src/app/input) | Test inject `@Input()` value
[Output](examples/src/app/output-subscribe) | Test catching `@Output()`
[Bootstrap](examples/src/app/bootstrap-button) | Bootstrap integration with style : `setConfig({ stylesheet: 'https://...});`
[Add style](examples/src/app/add-style) | Add custom style for testing : `setConfig({ style: 'p {background-color: blue;}' });`
[HTML mount](examples/src/app/html-mount) | Mount a component with html, don't forget to call `detectChanges()` after
[Image Snapshot](examples/src/app/image-snapshot) | Mount a component and visual asserting
[Material](examples/src/app/material-button) | Material integration
[OnPush strategy](examples/src/app/on-push-strat) | Component with `changeDetection: ChangeDetectionStrategy.OnPush` need call `detectChanges()`
[Directive](examples/src/app/directives/highlight) | Test directive with mountHtml
[Pipe](examples/src/app/pipes/capitalize) | Test pipe with mountHtml
[Stub service](examples/src/app/service-stub) | Stub a service with Observable

### External

- [Tour of Heroes](https://github.com/bahmutov-tour-of-heroes)

## Working

I have successfully used this mounting approach to test components in other frameworks.

* [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test)
* [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test)
* [cypress-cycle-unit-test](https://github.com/bahmutov/cypress-cycle-unit-test)
* [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)
* [cypress-angular-unit-test](https://github.com/bahmutov/cypress-angular-unit-test)
* [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test)
* [cypress-angularjs-unit-test](https://github.com/bahmutov/cypress-angularjs-unit-test)

## Development

This project only transpiles the library, to see it in action:

1. switch to the example project like `cd examples/ng7`
2. install it with `npm i`
3. open Cypress with `npx cypress open`

Pick any component test spec file to run

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[ci image]: https://github.com/bahmutov/cypress-angular-unit-test/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cypress-angular-unit-test/actions
