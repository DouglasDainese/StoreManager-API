const { expect } = require('chai');
const sinon = require('sinon');
const { sales } = require('../../../src/models')
const salesServices = require('../../../src/services');

const { allSalesMock, saleId1 } = require('../mocks/salesModel.mock');

describe('Testes de unidade da camada services do endpoint /sales', function () {
  it('Recuperando a lista de todos as vendas', async function () {

    sinon.stub(sales, 'getAllSales').resolves(allSalesMock);
  
    const getAllsales = await salesServices.findSalesService({});

    expect(getAllsales).to.be.deep.equal( { type: null, message: allSalesMock }  );
  });

  it('Recuperando uma venda por id', async function () {

    sinon.stub(sales, 'getAllSalesById').resolves(saleId1);
  
    const getAllSalesById = await salesServices.findSalesService({id:1});

    expect(getAllSalesById).to.be.deep.equal({ type: null, message: saleId1 });
  });

  // it('Verifica se retorna um erro caso Id não exista', async function () {

  //   const objErro = { type: 404, message: 'Product not found' };
  //   sinon.stub(sales, 'findById').resolves(undefined);
  
  //   const getsalesById = await servicesFindById(99);

  //   expect(getsalesById).to.be.deep.equal(objErro);
  // });

  afterEach(function () {
    sinon.restore();
  });
});