Cypress.Commands.add("fillAddressForm", () => {
  cy.get("#name").type("Gigi");
  cy.get("#cep").type("13032-390");
  cy.get("#state").type("São Paulo");
  cy.get("#city").type("Campinas");
  cy.get("#street").type("Rua Colônia de Minas");
  cy.get("#district").type("Jardim Santa Amália");
  cy.get("#number").type("136");
  cy.get("#complement").type("Casa");
  cy.get("#contact").type("19998462227");
});

Cypress.Commands.add("checkUrl", (address: String) => {
  const baseUrl = Cypress.config().baseUrl;
  cy.url().should("equal", `${baseUrl}${address}`);
});
