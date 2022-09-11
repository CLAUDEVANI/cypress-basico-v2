Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Claudevani");
  cy.get("#lastName").type("Pereira");
  cy.get("#email").type("cp@gmail.com");
  cy.get("#phone").type("11990706070");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
  cy.get(".success").should("be.visible");
});
