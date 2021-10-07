describe("Pyramid Marketplace Integration Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Products on the Home Page", () => {
    cy.get(".product-container").should("have.length", 32);
  });
  it("Search a specific product", () => {
    cy.get(".header-pyramid__search-bar").type("Mouse Multilaser");
    cy.get(".header-pyramid__search-btn").click();
    cy.get(".product-container").should("have.length", 1);
  });
  it("Add an item in the Shopping Cart", () => {
    cy.get(":nth-child(1) > .product-container").click();
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.get(".product-cart").should("have.length", 1);
  });
  it("Add more than one item in the Shopping Cart", () => {
    cy.get(":nth-child(1) > .product-container").click();
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.get("a > img").click();
    cy.get(":nth-child(2) > .product-container").click();
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.get(".product-cart").should("have.length", 2);
  });
  it("Add the same item in the Shopping Cart", () => {
    cy.get(":nth-child(1) > .product-container").click();
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.get("a > img").click();
    cy.get(":nth-child(1) > .product-container").click();
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.get(".product-cart").should("have.length", 1);
  });
  it("Increase and decrease the item quantity in the Shopping Cart", () => {
    cy.get(":nth-child(1) > .product-container").click();
    cy.wait(400);
    cy.get('[href="/shopping-cart"] > .button-pyramid').click();
    cy.get(".quantity-input__increase-btn").click();
    cy.get(".quantity-input__input").should("have.value", 2);
    cy.get(".quantity-input__decrease-btn").click();
    cy.get(".quantity-input__input").should("have.value", 1);
  });
});
