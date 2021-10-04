describe("Tests", () => {
  it("Testing", () => {
    cy.visit("/");
    cy.get(":nth-child(1) > .product-container").click();
    cy.url().should("include", "/product-details");
    cy.get('[href="/address"] > .button-pyramid').click();
    cy.url().should("include", "/address");
    cy.get("#name").type("Gigi");
    cy.get("#cep").type("13032-390");
    cy.get("#state").type("São Paulo");
    cy.get("#city").type("Campinas");
    cy.get("#street").type("Rua Colônia de Minas");
    cy.get("#district").type("Jardim Santa Amália");
    cy.get("#number").type("136");
    cy.get("#complement").type("Casa");
    cy.get("#contact").type("19998462227");
    cy.get(".button-pyramid").click();
    cy.url().should("include", "/payment");
    cy.get("#creditCard").click();
    cy.get(".button-pyramid").click();
    cy.url().should("include", "/success");
    cy.get(".button-pyramid").click();
  });
});
