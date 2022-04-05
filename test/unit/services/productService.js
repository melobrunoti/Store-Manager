const { expect } = require('chai');
const { object } = require('joi');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

const { fakeProducts, fakeUpdate } = require('../data/mocks');
describe('Service layer - Products ', () => { 
  describe('get all products ', () => { 
    before(async () => {
      sinon.stub(productModel, 'getAll').resolves(fakeProducts);
    })
    after(() => {
      productModel.getAll.restore();
    })

    it('return an array with all products', async () => {
      const response = await productService.getAll();


      expect(response).to.be.a('array');
    })

    it('need to have a lenght of 3', async () => {
      const response = await productService.getAll();
      expect(response).to.have.length(3)
    })
  })

  describe('get a product by id', () => { 
    before(() => {
        sinon.stub(productModel, 'getById').resolves(fakeProducts[0])
    })
    after(() => {
      productModel.getById.restore();
    })

    it('return a product', async () => {
      const response = await productService.getById(1);
      
      expect(response).to.deep.eq(fakeProducts[0]);
    })
  })

  describe('create a product', () => { 
    before(() => {
      sinon.stub(productModel, 'createProduct').resolves({ id: 1, name: 'A volta dos que nao foram', quantity: 1 });

    })
    after(() => {
      productModel.createProduct.restore();
    })

    it('when sucessfull', async () => {
      const response = await productService.createProduct('A volta dos que nao foram', 1);
      
      expect(response).to.deep.eq({ id: 1, name: 'A volta dos que nao foram', quantity: 1 });
    })
  })

  describe('update a product', () => { 
    before(() => {
      sinon.stub(connection, 'execute').resolves([fakeProducts]);
      /* sinon.stub(productModel, 'getAll').resolves([fakeProducts]); */
      sinon.stub(productModel, 'updateProduct').resolves({ id: 1, name: 'A volta dos que nao foram', quantity: 10 });
     
      
    })
    after(() => {
      productModel.updateProduct.restore();
 /*      productModel.getAll.restore(); */
      connection.execute.restore();
    })

    it('when sucessfull', async () => {
      const response = await productService.updateProduct({ id: 1, name: 'A volta dos que nao foram', quantity: 10 });
      
      expect(response).to.deep.eq({ id: 1, name: 'A volta dos que nao foram', quantity: 10 });
    })
  });

  describe('delete a product', () => { 
    before(() => {
      sinon.stub(connection, 'execute').resolves([fakeProducts]);
      /* sinon.stub(productModel, 'getAll').resolves([fakeProducts]); */
      sinon.stub(productModel, 'deleteProduct').resolves(true);
     
      
    })
    after(() => {
      productModel.deleteProduct.restore();
 /*      productModel.getAll.restore(); */
      connection.execute.restore();
    })

    it('when sucessfull', async () => {
      const response = await productService.deleteProduct(1);
      
      expect(response).to.be.equal(true)
    })
  });
});

