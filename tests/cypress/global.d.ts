export {};

declare global {
  namespace Cypress {
    interface Chainable {
      fillAddressForm(): void;
      checkUrl(address: String);
    }
  }
}
