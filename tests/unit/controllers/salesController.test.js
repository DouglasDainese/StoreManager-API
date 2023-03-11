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

});