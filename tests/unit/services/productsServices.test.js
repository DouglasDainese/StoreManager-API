const { expect } = require('chai');
const sinon = require('sinon');
const { products } = require('../../../src/models');
const { servicesFindAll, servicesFindById } = require('../../../src/services');

const { getAllMock, getByIdMock } = require('../mocks/productsModel.mock');

describe('Testes de unidade da camada services do endpoint /produtos', function () {
  it('Recuperando a lista de todos os produtos', async function () {

    const objReturn = { type: null, message: getAllMock };
    sinon.stub(products, 'findAll').resolves(getAllMock);
  
    const getAllProducts = await servicesFindAll();

    expect(getAllProducts).to.be.deep.equal(objReturn);
  });

  it('Recuperando um produto por id', async function () {

    const objReturn = { type: null, message: getByIdMock };
    sinon.stub(products, 'findById').resolves(getByIdMock);
  
    const getProductsById = await servicesFindById(1);

    expect(getProductsById).to.be.deep.equal(objReturn);
  });

  it('Verifica se retorna um erro caso Id não exista', async function () {

    const objErro = { type: 404, message: 'Product not found' };
    sinon.stub(products, 'findById').resolves(undefined);
  
    const getProductsById = await servicesFindById(99);

    expect(getProductsById).to.be.deep.equal(objErro);
  });

  afterEach(function () {
    sinon.restore();
  });
});