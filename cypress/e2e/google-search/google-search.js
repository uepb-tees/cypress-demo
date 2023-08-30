import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
    const url = Cypress.env('BASE_URL');
    cy.visit(url);
});

When("Eu digito {string} na caixa de pesquisa", (searchTerm) => {
    this.searchTerm = searchTerm;
    cy.get('.gLFyf').type(searchTerm);
});
When(/^Eu clico no botao estou com sorte$/, () => {
    cy.get('input[name="btnI"]').eq(0).click();
});

When(/^Eu clico no botao pesquisar$/, () => {
    cy.get('input[name="btnK"]').eq(0).click();
});

Then("Eu devo ver a string {string} no site {string}", (result, site) => {
    if(site === 'google.com') {
        cy.get('body').should('contain', result);
    } else {
        this.result = result;
        cy.origin(site, { args: { result } }, ( { result }) => {
            cy.get('body').contains(result);
        });
    }
});
