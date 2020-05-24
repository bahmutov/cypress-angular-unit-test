import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import {AppComponent} from './app.component'
import {NgModule, ApplicationRef} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

export const rootId = 'cypress-root'

export const mountt = (component: any, inputs?: object) => {
  // TODO improve logging using a full log instance
  cy.log(`Mounting **${component.name}**`)

  @NgModule({
    declarations: [
      component
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    entryComponents: [component]
  })
  class MyTestModule {
    // @ts-ignore
    app: ApplicationRef;

    ngDoBootstrap(app: ApplicationRef) {
      this.app = app;
    }
  }

  cy.get(rootId).then(el$ => {
    return platformBrowserDynamic().bootstrapModule(MyTestModule).then(function (moduleRef) {
      const app = moduleRef.instance.app;
      const componentRef = app.bootstrap(component, el$.get(0));

      if (inputs) {
        Object.keys(inputs).forEach(inputName => {
          // @ts-ignore
          componentRef.instance[inputName] = inputs[inputName];
        });
      }
      app.tick();
    });
  });
};

describe('AppComponent', () => {
  beforeEach(() => {
    const html = `
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <cypress-root></cypress-root>
    </body>
  `;
    const document = cy.state('document');
    document.write(html);
    document.close();
  })
  it('shows the input', () => {
    // component + any inputs object
    mountt(AppComponent, {title: 'World'})
    // use any Cypress command afterwards
    cy.contains('World app is running!')
    cy.get('#twitter-logo').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})
