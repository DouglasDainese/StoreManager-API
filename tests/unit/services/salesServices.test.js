const { expect } = require('chai');
const sinon = require('sinon');
const salesServices = require('../../../src/services');

const mock = require('../mocks/salesModel.mock');

describe('Testes de unidade da camada services do endpoint /sales', function () {
  it('Recuperando a lista de todos as vendas', async function () {

    sinon.stub(sales, 'getAllSales').resolves(mock.allSalesMock);
  
    const getAllsales = await salesServices.findSalesService({});
    //teste

    expect(getAllsales).to.be.deep.equal( { type: null, message: mock.allSalesMock }  );
  });

  it('Recuperando uma venda por id', async function () {

    sinon.stub(sales, 'getAllSalesById').resolves(mock.saleId1);
  
    const getAllSalesById = await salesServices.findSalesService({id:1});

    expect(getAllSalesById).to.be.deep.equal({ type: null, message: mock.saleId1 });
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