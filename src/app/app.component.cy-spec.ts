/// <reference types="cypress" />
import { AppComponent } from './app.component'

// Required for JIT in NG-7
import 'core-js/es7/reflect';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
class MyTestModule {
  app: ApplicationRef;
  ngDoBootstrap(app: ApplicationRef) {
    console.log('ngDoBootstrap')
    this.app = app;
  }
}

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
    cy.get('app-root').then(el$ => {
      debugger
      platformBrowserDynamic()
        .bootstrapModule(MyTestModule)
        .then(function (moduleRef) {
          console.log('modulre ref', moduleRef)
          moduleRef.instance.app.bootstrap(AppComponent, el$.get(0));
        });
    });

  })
})
