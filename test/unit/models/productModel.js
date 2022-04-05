const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');
const { fakeProducts, fakeUpdate} = require('../data/mocks');

describe('Models Layer', () => { 
  describe('get all products', () => { 
    before(async () => {
      sinon.stub(connection, 'execute').resolves([fakeProducts]);
    })
    after(() => {
      connection.execute.restore();
    })

    it('return an array with all products', async () => {
      const response = await productModel.getAll();
      expect(response).to.be.equal(fakeProducts);
    })

    it('need to have a lenght of 3', async () => {
      const response = await productModel.getAll();
      
      expect(response).to.have.length(3)
    })
  })

  describe('get product by id', () => { 
    before(() => {
        sinon.stub(connection, 'execute').resolves([fakeProducts])
    })
    after(() => {
      connection.execute.restore();
    })

    it('return a product', async () => {
      const response = await productModel.getById(1);

      expect(response).to.deep.eq(fakeProducts[0]);
    })
  });

  describe('create a product', () => { 
    before(async () => {
      const execute = [{insertId: 1}]
      sinon.stub(connection, 'execute').resolves(execute);
    })
    after(() => {
      connection.execute.restore();
    })

    it('when sucessfull', async () => {
      const response = await productModel.createProduct({name: 'A volta dos que nao foram', quantity: 2});
      expect(response).to.deep.eq({id: 1, name: 'A volta dos que nao foram', quantity: 2})
    })
  })

  describe('Update a product', () => { 
    before(async () => {
      sinon.stub()
      sinon.stub(connection, 'execute').resolves(fakeUpdate);
    })
    after(() => {
      connection.execute.restore();
    })

    it('when sucessfull', async () => {
      const response = await productModel.updateProduct(fakeUpdate);
      expect(response).to.deep.eq(fakeUpdate)
    })
  })

  describe('delete a product', () => { 
    before(() => {
        sinon.stub(connection, 'execute').resolves(true)
    })
    after(() => {
      connection.execute.restore();
    })

    it('if deleted with sucess return true', async () => {
      const response = await productModel.deleteProduct(1);

      expect(response).to.be.equal(true);
    })
  });
});