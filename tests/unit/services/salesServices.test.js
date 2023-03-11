const { expect } = require('chai');
const sinon = require('sinon');
const sales  = require('../../../src/models/salesModel')
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

  it('Verifica se é possivel inserir uma nova venda', async function () {

    const objReturn = { type: null, message: mock.saleByIdReturn };
    sinon.stub(sales, 'registerNewSales').resolves(5)
    sinon.stub(sales, 'insertSalesProducts').resolves(1);
    sinon.stub(sales, "getSalesById").resolves(mock.saleByIdReturn)
  
    const insertNewSales = await salesServices.insertSales([{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]);

    expect(insertNewSales).to.be.deep.equal(objReturn);
  });

  afterEach(function () {
    sinon.restore();
  });
});