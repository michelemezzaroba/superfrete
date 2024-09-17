const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    defaultCommandTimeout: 20000, // 20 segundos para comandos individuais
    pageLoadTimeout: 120000 // Aumenta o timeout para 120 segundos
  }
}



