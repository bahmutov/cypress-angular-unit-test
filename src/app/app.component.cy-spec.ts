/// <reference types="cypress" />
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { AppComponent } from './app.component'

import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const bootComponent = (component: any, inputs?: object) => {
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
    app: ApplicationRef;
    ngDoBootstrap(app: ApplicationRef) {
      this.app = app;
    }
  }

  cy.get('app-root').then(el$ => {
    platformBrowserDynamic().bootstrapModule(MyTestModule).then(function (moduleRef) {
      const app = moduleRef.instance.app;
      const componentRef = app.bootstrap(component, el$.get(0));

      if (inputs) {
        Object.keys(inputs).forEach(inputName => {
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
        <app-root></app-root>
      </body>
    `;
    const document = (cy as any).state('document');
    document.write(html);
    document.close();
  })

  it('works', () => {
    bootComponent(AppComponent)
    cy.contains('Welcome to angular-cypress-unit!')
  })

  it.only('passes an input', () => {
    bootComponent(AppComponent, {title: 'World'})
    cy.contains('Welcome to World!')
  })
})
