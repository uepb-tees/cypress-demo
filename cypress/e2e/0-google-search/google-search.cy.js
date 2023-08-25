/// <reference types="cypress" />

describe('Google Search', () => { 
    beforeEach(() => { 
        const url = Cypress.env('BASE_URL');
        cy.visit(url);
    });    

    it('Busca no Google por UEPB - estou com sorte', () => {
        cy.get('.gLFyf').type('UEPB');
        cy.get('input[name="btnI"]').eq(0).click();
        cy.origin('https://uepb.edu.br', () => { 
            cy.get('body').contains('UEPB');
        });
    });

    it('Busca no Google por UEPB - busca google', () => {
        cy.get('.gLFyf').type('UEPB');
        cy.get('.gNO89b').eq(1).click();
        cy.get('body').contains('UEPB');
    });
});
