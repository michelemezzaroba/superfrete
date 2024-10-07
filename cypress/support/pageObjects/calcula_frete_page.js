class FretePage {
    visit() {
        cy.visit('https://web.superfrete.com/');
        cy.get('#originPostcode', { timeout: 20000 }).should('be.visible');
    }

    clearData() {
        cy.clearCookies();
        cy.clearLocalStorage();
    }

    setViewport() {
        cy.viewport(1366, 768);
    }

    fillOriginPostcode(cep) {
        cy.get('#originPostcode').type(cep);
    }

    selectWeight(weight) {
        cy.get('#weight').click();
        cy.get(`li[data-value="${weight}"]`).click();
    }

    fillPackageDimensions(height, width, depth) {
        cy.get('#packageHeight').type(height);
        cy.get('#packageWidth').type(width);
        cy.get('#packageDepth').type(depth);
    }

    fillDestinationPostcode(cep) {
        cy.get('#destinationPostcode').type(cep);
    }

    submitCalculation() {
        cy.get('[data-cy="calculator-submit"]').click();
    }

    verifyPACVisible() {
        cy.get('#calculator-package-type-PAC-container').scrollIntoView().should('be.visible');
    }

    verifySEDEXVisible() {
        cy.get('#calculator-package-type-SEDEX-container').scrollIntoView().should('be.visible');
    }

    verifyInvalidDimensions() {
        cy.get('#packageHeight-helper-text').should('contain', 'Altura mínima 0.4 cm');
        cy.get('#packageWidth-helper-text').should('contain', 'Largura mínima 8 cm');
        cy.get('#packageDepth-helper-text').should('contain', 'Comprimento mínimo 13 cm');
    }
}

export default new FretePage();
