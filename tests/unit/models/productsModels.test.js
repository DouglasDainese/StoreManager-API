const { expect } = require('chai');
const sinon = require('sinon');
const { products } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { getAllMock, getByIdMock, insertMock } = require('../mocks/productsModel.mock');

describe('Testes de unidade da camada model do endpoit /produtos',async  function () {
  it('Recuperando a lista de todos os produtos', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([getAllMock]);
    // Act
    const getAllProducts = await products.findAll();
    // Assert
    expect(getAllProducts).to.be.deep.equal(getAllMock);
  });

  it('Recuperando um produto pelo id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[getByIdMock]]);
    // Act
    const getProductById = await products.findById(1);
    // Assert
    expect(getProductById).to.be.deep.equal(getByIdMock);
  });
  it('Inserindo um novo produto', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[1]]);
    // Act
    const getProductById = await products.insert("NoteBook Dell");
    console.log(getProductById);
    // Assert
    expect(getProductById).to.be.equal(undefined);
  });

  afterEach(function () {
    sinon.restore();
  });
});