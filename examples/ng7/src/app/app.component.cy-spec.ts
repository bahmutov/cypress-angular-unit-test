/// <reference types="cypress" />
import { mount } from 'cypress-angular-unit-test'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('works', () => {
    mount(AppComponent)
    cy.contains('Welcome to angular-cypress-unit!')
  })

  it('passes an input', () => {
    mount(AppComponent, {title: 'World'})
    cy.contains('Welcome to World!')
  })
})
