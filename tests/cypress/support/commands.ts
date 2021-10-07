Cypress.Commands.add("fillAddressForm", () => {
  cy.get("#name").type("Vincius Almeida");
  cy.get("#cep").type("13059-581");
  cy.get("#state").type("São Paulo");
  cy.get("#city").type("Campinas");
  cy.get("#street").type("R. Heitor Lacerda Guedes");
  cy.get("#district").type("Cidade Satélite Íris");
  cy.get("#number").type("1000");
  cy.get("#complement").type("Casa");
  cy.get("#contact").type("9554180621");
});

Cypress.Commands.add("checkUrl", (address: String) => {
  const baseUrl = Cypress.config().baseUrl;
  cy.url().should("equal", `${baseUrl}${address}`);
});
