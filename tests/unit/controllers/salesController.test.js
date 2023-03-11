const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

const { saleId1, saleByIdReturn, reqNewSale } = require('../mocks/salesModel.mock');

describe('Testes de unidade da camada controllers do endpoint /sales', function () {
  
  describe('Listando as vendas', function () {
    it('Deve retornar o status 200 e a lista', async function () {

      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'findSalesService')
        .resolves({ type: null, message: saleId1 });

      await salesController.findSalesController(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(saleId1);

    });

    afterEach(function () {
      sinon.restore();
    });
  });
  describe('Inserindo uma nova vendas', function () {
    it('Deve retornar o status 201 e a nova venda', async function () {

      const res = {};
      const req = reqNewSale;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'insertSales')
        .resolves({ type: null, message: saleByIdReturn });

      await salesController.insertsSales(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(saleByIdReturn);

    });

    afterEach(function () {
      sinon.restore();
    });
  });
  describe('Deletando uma venda', function () {
    it('Deve retornar o status 204', async function () {

      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'deleteSalesService')
        .resolves({ type: null, message: null });

      await salesController.deleteSales(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith();

    });
    it(`Se a venda for inexistente o resultado retornado deverá ser
     conforme exibido abaixo, com um status http 404`, async function () {

      const res = {};
      const req = { params: { id: 99 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'deleteSalesService')
        .resolves({ type: 404, message: 'Sale not found' });

      await salesController.deleteSales(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({message: 'Sale not found' });

    });
    
    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Atualizando uma venda', function () {
    it(`Se a venda for alterada com sucesso o resultado retornado
     deverá ser conforme exibido abaixo, com um status http 200`, async function () {

      const res = {};
      const req = {
        params: { id: 1 }, body: [{ "productId": 1, "quantity": 10 },
        { "productId": 2, "quantity": 50 }]
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'updateSalesService')
        .resolves({
          type: null, message: {
            saleId: 1, itemsUpdated:
              [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]
            } });

      await salesController.updateSalesController(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ saleId: 1, itemsUpdated:
              [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]
            });

    });
    it(`Se a venda for inexistente o resultado retornado deverá ser
     conforme exibido abaixo, com um status http 404`, async function () {

      const res = {};
      const req = { params: { id: 99 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'updateSalesService')
        .resolves({ type: 404, message: 'Sale not found' });

      await salesController.deleteSales(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({message: 'Sale not found' });

    });
    
    afterEach(function () {
      sinon.restore();
    });
  });

});