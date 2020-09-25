const faker = require('faker');
const db = require('./index.js');
//code review
const createProducts = () => {
  const productsArr = [];
  for (let i = 0; i < 100; i++) {
    productsArr.push({ item: faker.random.word() });
    // createProduct()
  }
  return productsArr;
};

const insertMockData = () => {
  const data = createProducts();
  data.forEach(product => {
    db.query(`INSERT INTO entry(item) VALUES('${product.item}')`, (err, results) => {
      if (err) {
        console.log('SEED FAILED');
      } else {
        console.log('SEED SUCCESSFUL');
      }
    });
  });
  db.end();
};

insertMockData();
