// Arquivo cypress/support/e2e.js

// Adicione comandos globais ou imports aqui
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retira a falha do Cypress se houver um erro não tratado
    return false;
  });
  