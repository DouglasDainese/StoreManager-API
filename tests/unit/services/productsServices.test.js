const { expect } = require('chai');
const sinon = require('sinon');
const { products } = require('../../../src/models');
const services = require('../../../src/services');

const { getAllMock, getByIdMock } = require('../mocks/productsModel.mock');

describe('Testes de unidade da camada services do endpoint /produtos', function () {
  it('Recuperando a lista de todos os produtos', async function () {

    const objReturn = { type: null, message: getAllMock };
    sinon.stub(products, 'findAll').resolves(getAllMock);
  
    const getAllProducts = await services.servicesFindAll();

    expect(getAllProducts).to.be.deep.equal(objReturn);
  });

  it('Recuperando um produto por id', async function () {

    const objReturn = { type: null, message: getByIdMock };
    sinon.stub(products, 'findById').resolves(getByIdMock);
  
    const getProductsById = await services.servicesFindById(1);

    expect(getProductsById).to.be.deep.equal(objReturn);
  });

  it('Verifica se retorna um erro caso Id não exista', async function () {

    const objErro = { type: 404, message: 'Product not found' };
    sinon.stub(products, 'findById').resolves(undefined);
  
    const getProductsById = await services.servicesFindById(99);

    expect(getProductsById).to.be.deep.equal(objErro);
  });
  it('Verifica se é possivel atualizar um produto', async function () {

    const updateProduct = { id: 1, name: 'Balanço Deixa Chover Amor' };

    sinon.stub(products, 'update').resolves([{ affectedRows: 1 }]);
    sinon.stub(products, 'findById').resolves(updateProduct)
  
    const getProductsById = await services.updateProductService(updateProduct);

    expect(getProductsById).to.be.deep.equal({ type: null, message: updateProduct });
  });
  it('Verifica se vem uma mensagem de erro ao atualizar um produto que não existe', async function () {

    const objErro = { type: 404, message: 'Product not found' };
    sinon.stub(products, 'update').resolves(undefined);
    sinon.stub(products, 'findById').resolves(undefined)
  
    const getProductsById = await services.updateProductService({id: 99, name: 'Celular'});

    expect(getProductsById).to.be.deep.equal(objErro);
  });

  afterEach(function () {
    sinon.restore();
  });
});