const getAllMock = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
]

const getByIdMock = { id: 1, name: 'Martelo de Thor' };

const insertMock = { id: 4, name: 'Geloww' };

const updateProductMock = { id: 1, name: 'Balanço' }

const searchMock = [{ id: 1, name: "Martelo de Thor" }];

module.exports = {
  getAllMock,
  getByIdMock,  
  insertMock,
  updateProductMock,
  searchMock
}