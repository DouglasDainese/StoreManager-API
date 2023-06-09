const { expect } = require('chai');
const sinon = require('sinon');
const { products } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { getAllMock, getByIdMock, searchMock } = require('../mocks/productsModel.mock');

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
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    // Act
    const getProductById = await products.insert("NoteBook Dell");
    // Assert
    expect(getProductById).to.be.equal(1);
  });
  it('Atualizando um produto', async function () {
   
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const productUpdate = {id: 1, name: 'NoteBook Dell'}
    
    const result = await products.update(productUpdate);
    
    expect(result).to.be.equal(1);
  });
  it('Deletando um produto', async function () {
   
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    
    const affectedRowsDelete = await products.deleteProduct(1);
    
    expect(affectedRowsDelete).to.be.equal(1);
  });
  it('pesquisando um produto por um termo', async function () {
   
    sinon.stub(connection, 'execute').resolves([searchMock]);
    
    const resultSearch = await products.searchByName('art');
    
    expect(resultSearch).to.be.equal(searchMock);
  });

  

  afterEach(function () {
    sinon.restore();
  });
});