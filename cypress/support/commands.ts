/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  const searchInput = cy.get('input[name="q"]')

  searchInput.type(query)
  searchInput.parent('form').submit()
})
