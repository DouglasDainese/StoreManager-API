const { expect } = require('chai');
const sinon = require('sinon');
const { sales } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const mock = require('../mocks/salesModel.mock');

describe('Testes de unidade da camada model do endpoit /sales', function () {

  describe('Testes de busca da camada model do endpoit /sales', function () {
    it('Recuperando a lista de todos as vendas', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([mock.allSalesMock]);
      // Act
      const getAllSales = await sales.getAllSales();
      // Assert
      expect(getAllSales).to.be.deep.equal(mock.allSalesMock);
    });

    it('Recuperando uma nova venda pelo id', async function () {
      sinon.stub(connection, "execute").resolves([mock.saleById]);

      const sale1 = await sales.getSalesById(1);

      expect(sale1).to.be.deep.equal(mock.saleByIdReturn);
    });

     it('Recuperando todas as venda por um id', async function () {
      sinon.stub(connection, "execute").resolves([mock.allSaleById]);

      const sale = await sales.getAllSalesById(1);

      expect(sale).to.be.deep.equal(mock.allSaleById);
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Teste de registro de uma venda na camada "model"', async function () {
    it('Inserindo uma nova venda no banco de dados', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);

      const newSale = await sales.registerNewSales()
      
      expect(newSale).to.be.equal(5);
    });

    it('Inserindo produtos de uma nova venda no banco de dados', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows : 1 }]);

      const newSales = await sales.insertSalesProducts(1, { productId: 1, quantity:1 })
      
      expect(newSales).to.be.equal(undefined);
    })
    afterEach(function () {
      sinon.restore();
    });
  } )
});