import { AppComponent } from '../../src/app/app.component'
import 'zone.js';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, ViewContainerRef, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// dynamic loading based on blog post
// https://blog.angularindepth.com/how-to-manually-bootstrap-an-angular-application-9a36ccf86429

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
class AppModule {
  app: ApplicationRef
  ngDoBootstrap(app: ApplicationRef) {
    this.app = app
  }
}

/* eslint-env mocha */
/* global cy */
describe('AppComponent', () => {
  beforeEach(() => {
    const html = `
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <app-root></app-root>
      </body>
    `
    const document = (cy as any).state('document')
    document.write(html)
    document.close()

    cy.get('app-root').then(el$ => {
      platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(function (moduleRef) {
          moduleRef.instance.app.bootstrap(AppComponent, el$.get(0))
        })
    })
  })

  it('works', () => {})
})
