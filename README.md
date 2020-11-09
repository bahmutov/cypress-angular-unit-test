## cypress-angular-unit-test BETA [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-5.5.0-brightgreen) [![ci status][ci image]][ci url]

## Installation

```shell
npm install -D cypress cypress-angular-unit-test
```

Add to your support file

```js
// cypress/support/index.js
// core-js 3.*
require('core-js/es/reflect');
// core-js 2.*
require('core-js/es7/reflect');
require('cypress-angular-unit-test/support');
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

See blocker issue for Angular9 [here](https://github.com/bahmutov/ng9-tour-of-heroes/issues/1)

## Use

```js
import { mount } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('shows the input', () => {
    // Init Angular stuff
    initEnv(AppComponent);
    // component + any inputs object
    mount(AppComponent, { title: 'World' });
    // use any Cypress command afterwards
    cy.contains('Welcome to World!');
  });
});
```

![Demo](images/demo.gif)

Under the hood, it's based on [TestBed](https://angular.io/api/core/testing/TestBed), you can use it by calling :

```js
getCypressTestBed();

// Don't call TestBed.* directly in your spec !

// So, to inject a Service you can do :
const componentService = getCypressTestBed().inject(SomeService);
```

## Examples

| Use case                                                          | Description                                                                                  |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Input](examples/ng9/src/app/input)                               | Test inject `@Input()` value                                                                 |
| [Output](examples/ng9/src/app/output-subscribe)                   | Test catching `@Output()`                                                                    |
| [Bootstrap](examples/ng9/src/app/bootstrap-button)                | Bootstrap integration with style : `setConfig({ stylesheet: 'https://...});`                 |
| [Add style](examples/ng9/src/app/add-style)                       | Add custom style for testing : `setConfig({ style: 'p {background-color: blue;}' });`        |
| [HTML mount](examples/ng9/src/app/html-mount)                     | Mount a component with html, don't forget to call `detectChanges()` after                    |
| [Image Snapshot](examples/ng9/src/app/image-snapshot)             | Mount a component and visual asserting                                                       |
| [Material](examples/ng9/src/app/material-button)                  | Material integration                                                                         |
| [Prime NG](examples/ng9/src/app/primeng-button)                   | PrimeNG integration                                                                          |
| [OnPush strategy](examples/ng9/src/app/on-push-strat)             | Component with `changeDetection: ChangeDetectionStrategy.OnPush` need call `detectChanges()` |
| [Directive](examples/ng9/src/app/directives/highlight)            | Test directive with mountHtml                                                                |
| [Pipe](examples/ng9/src/app/pipes/capitalize)                     | Test pipe with mountHtml                                                                     |
| [Stub service](examples/ng9/src/app/service-stub)                 | Stub a service with Observable                                                               |
| [Only service](examples/ng9/src/app/my-values.service.cy-spec.ts) | Test a service without a component                                                           |
| [Web Component](examples/ng9/src/app/use-custom-element)          | Test a custom element with shadow dom                                                        |
| [Assets](examples/ng9/src/app/assets-image)                       | `assets` folder accessible by Cypress                                                        |

## Working

I have successfully used this mounting approach to test components in other frameworks.

- [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test)
- [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test)
- [cypress-cycle-unit-test](https://github.com/bahmutov/cypress-cycle-unit-test)
- [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)
- [cypress-angular-unit-test](https://github.com/bahmutov/cypress-angular-unit-test)
- [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test)
- [cypress-angularjs-unit-test](https://github.com/bahmutov/cypress-angularjs-unit-test)

## Debugging

You can turn on debugging log by setting environment variable :

```
// Unix
export DEBUG="cypress-angular-unit-test,cypress:webpack:stats"

// PowerShell
$env:DEBUG="cypress-angular-unit-test,cypress:webpack:stats"
```

## Development

This project only transpiles the library, to see it in action:

1. switch to the example project like `cd examples/ng9`
2. install it with `npm i`
3. open Cypress with `npx cypress open`

Pick any component test spec file to run

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[ci image]: https://github.com/bahmutov/cypress-angular-unit-test/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cypress-angular-unit-test/actions
