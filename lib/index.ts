import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export const rootId = 'cypress-root'

export const mount = (component: any, inputs?: object) => {
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

  cy.get(rootId, {log: false}).then(el$ => {
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
