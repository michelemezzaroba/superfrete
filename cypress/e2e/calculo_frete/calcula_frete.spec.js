import FretePage from '../../support/pageObjects/calcula_frete_page';

describe('Teste de cálculo de frete', () => {
    beforeEach(() => {
        FretePage.clearData();
        FretePage.setViewport();
        FretePage.visit();
    });

    it('Calcula frete com sucesso', () => {
        FretePage.fillOriginPostcode('88132-276');
        FretePage.selectWeight('0.3');
        FretePage.fillPackageDimensions('2', '11', '16');
        FretePage.fillDestinationPostcode('08090-284');
        FretePage.submitCalculation();
        FretePage.verifyPACVisible();
        FretePage.verifySEDEXVisible();
    });

    it('Valida medidas inválidas', () => {
        FretePage.fillOriginPostcode('88132-276');
        FretePage.selectWeight('0.3');
        FretePage.fillPackageDimensions('0.3', '7', '12');
        FretePage.fillDestinationPostcode('08090-284');
        FretePage.submitCalculation();
        FretePage.verifyInvalidDimensions();
    });
});
