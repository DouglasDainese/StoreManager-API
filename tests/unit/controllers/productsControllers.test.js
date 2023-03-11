const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { getAllMock, getByIdMock, updateProductMock } = require('../mocks/productsModel.mock');

describe('Testes de unidade da camada controllers do endpoint /produtos', function () {
  
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista', async function () {

      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'servicesFindAll')
        .resolves({ type: null, message: getAllMock });

      await productsController.getAllProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getAllMock);

    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Buscando produtos por Id', function () {
    it('Deve retornar o status 200 e o produto', async function () {

      const res = {};
      const req = { params: {id:1}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'servicesFindById')
        .resolves({ type: null, message: getByIdMock });

      await productsController.getByIdProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getByIdMock);

    });

    it('Deve retornar o status 404 e a mensagem: "Product not found" quando um for id inexistente', async function () {

      const res = {};
      const req = { params: { id: 99 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'servicesFindById')
        .resolves({ type: 404, message: 'Product not found' });

      await productsController.getByIdProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });

    });

    afterEach(function () {
      sinon.restore();
    });
  });
  describe('Atualizando um produto', function () {
    it('Deve retornar o status 200 e o produto atualizado', async function () {

      const res = {};
      const req = { params: {id:1}, body: {name: 'Balanço'}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'updateProductService')
        .resolves({ type: null, message: updateProductMock });

      await productsController.updateProductController(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(updateProductMock);

    });

    it('Deve retornar o status 404 e a mensagem: "Product not found" quando um for id inexistente', async function () {

      const res = {};
      const req = { params: { id: 99 }, body: { name: 'Balanço' } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'updateProductService')
        .resolves({ type: 404, message: 'Product not found' });

      await productsController.updateProductController(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });

    });

    afterEach(function () {
      sinon.restore();
    });
  });
  describe('Inserindo um produto', function () {
    it('Deve retornar o status 201 e o produto cadastrado', async function () {
      const newProduct = updateProductMock;
      const res = {};
      const req = { body: {name: 'Balanço'}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'insertProduct')
        .resolves({ type: null, message: newProduct });

      await productsController.insertNewProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);

    });

    afterEach(function () {
      sinon.restore();
    });
  });
  describe('deletando um produto', function () {
    it('Deve retornar o status 204', async function () {
      
      const res = {};
      const req = { params: {id: 1}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'deleteProductService')
        .resolves({ type: null, message: null });

      await productsController.deleteProductController(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith();

    });

    afterEach(function () {
      sinon.restore();
    });
  });
  describe('Pesquisando um produto pelo nome', function () {
    it('Deve retornar o status 200', async function () {
      
      const res = {};
      const req = { query: {q: "cel"}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services, 'searchProduct')
        .resolves({ type: null, message: { id: 5, name: 'Celular' } });

      await productsController.searchProductController(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ id: 5, name: 'Celular' });

    });

    afterEach(function () {
      sinon.restore();
    });
  });

});