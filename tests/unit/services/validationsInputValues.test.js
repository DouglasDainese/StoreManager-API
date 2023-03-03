const validations = require('../../../src/services/validations/validationsInputValues')
const { expect } = require('chai');
const sinon = require('sinon');

describe('Testes das validações da camada services', function () {

  describe('validando input name de products', function () {

    it('chamando a função sem um nome de um produto ela retorna os dados corretos',
      async function () {
  
      const result = await validations.validateNameProduct();

      expect(result).to.have.property("message");
      expect(result.message).to.be.equal('"name" is required');
      expect(result).to.have.property('type');
      expect(result.type).to.be.equal(400);
      });
    
    it('chamando a função com um nome de um produto menor que 5 caracteres ela retorna os dados corretos',
      async function () {
  
        const result = await validations.validateNameProduct('pão');        
        
        expect(result).to.have.property("message");
        expect(result.message).to.be.equal('"name" length must be at least 5 characters long');
        expect(result).to.have.property('type');
        expect(result.type).to.be.equal(422);
      });
    
    it('chamando a função com um nome correto ela permite a continuação da operação',
      async function () {
  
        const result = await validations.validateNameProduct('carros');        
        
        expect(result).to.have.property("message");
        expect(result.message).to.be.equal('');
        expect(result).to.have.property('type');
        expect(result.type).to.be.equal(null);
      });
      
      afterEach(function () {
      sinon.restore();
    });
  });
});
