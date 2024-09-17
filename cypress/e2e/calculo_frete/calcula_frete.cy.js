describe('Teste de cálculo de frete', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1366, 768);
        cy.visit('https://web.superfrete.com/');
        cy.get('#originPostcode', { timeout: 20000 }).should('be.visible');
    });

it('Calcula frete com sucesso', () => {
    cy.get('#originPostcode').type('88132-276'); //informa o CEP origem
    cy.get('#weight').click(); // clica em peso
    cy.get('li[data-value="0.3"]').click(); //seleciona o peso de 300g
    cy.get('#packageHeight').type('2'); // informa a altura
    cy.get('#packageWidth').type('11'); //informa a largura
    cy.get('#packageDepth').type('16'); //informa o comprimento
    cy.get('#destinationPostcode').type('08090-284'); //informa o CEP destino  
    cy.get('[data-cy="calculator-submit"]').click(); // clica no botão para calcular o frete
    cy.get('#calculator-package-type-PAC-container').scrollIntoView().should('be.visible'); // Verifica que está visivel a opção PAC
    cy.get('#calculator-package-type-SEDEX-container').scrollIntoView().should('be.visible'); // Verifica que está visivel a opção SEDEX
  });

  it('Valida medidas inválidas', () => {
    cy.get('#originPostcode').type('88132-276'); //informa o CEP origem
    cy.get('#weight').click(); // clica em peso
    cy.get('li[data-value="0.3"]').click(); //seleciona o peso de 300g
    cy.get('#packageHeight').type('0.3'); // informa a altura inválida
    cy.get('#packageWidth').type('7'); //informa a largura inválida
    cy.get('#packageDepth').type('12'); //informa o comprimento inválido
    cy.get('#destinationPostcode').type('08090-284'); //informa o CEP destino  
    cy.get('[data-cy="calculator-submit"]').click(); // clica no botão para calcular o frete
    cy.get('#packageHeight-helper-text').should('contain', 'Altura mínima 0.4 cm'); // Verifica mensagem de altura mínima
    cy.get('#packageWidth-helper-text').should('contain', 'Largura mínima 8 cm'); // Verifica mensagem de largura mínima
    cy.get('#packageDepth-helper-text').should('contain', 'Comprimento mínimo 13 cm'); // Verifica mensagem de comprimento mínimo
  });
});
