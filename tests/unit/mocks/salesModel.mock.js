const allSalesMock = [
  {
    saleId: 1,
    date: "2023-03-02T21:15:00.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2023-03-02T21:15:00.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2023-03-02T21:15:00.000Z",
    productId: 3,
    quantity: 15
  },
  {
    saleId: 3,
    date: "2023-03-02T21:15:00.000Z",
    productId: 1,
    quantity: 1
  },
  {
    saleId: 3,
    date: "2023-03-02T21:15:00.000Z",
    productId: 2,
    quantity: 5
  }
];

const allSaleById = [
  { date: "2023-03-02T21:15:00.000Z", productId: 1, quantity: 5 },
  { date: "2023-03-02T21:15:00.000Z", productId: 2, quantity: 10 }
];

const saleById = [{ productId: 1, quantity: 5 }, { productId: 2, quantity: 10 }];

const saleByIdReturn = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 5
    },
    {
      productId: 2,
      quantity: 10
    }
  ]
};

const allSales = [
  {
    saleId: 1,
    date: "2023-03-03T17:08:01.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2023-03-03T17:08:01.000Z",
    productId: 1,
    quantity: 1
  },
  {
    saleId: 1,
    date: "2023-03-03T17:08:01.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2023-03-03T17:08:01.000Z",
    productId: 3,
    quantity: 15
  }
];

const saleId1 = [
  { date: "2023-03-03T17:11:41.000Z", productId: 1, quantity: 5 },
  { date: "2023-03-03T17:11:41.000Z", productId: 2, quantity: 10 }
];

const saleByIdMock = { id: 1, date: '2023-03-11T00:49:47.000Z' };

const reqNewSale = {
  body: [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
};

module.exports = {
  allSalesMock,
  saleById,
  saleByIdReturn,
  allSaleById,
  allSalesMock,
  saleId1,
  saleByIdMock,
  reqNewSale
}