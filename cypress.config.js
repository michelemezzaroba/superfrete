const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    supportFile: 'cypress/support/e2e.js', 
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 20000, // 20 segundos para comandos individuais
    pageLoadTimeout: 120000 // Aumenta o timeout para 120 segundos
  }
}



