const { expect } = require('chai');
const { object } = require('joi');
const sinon = require('sinon');

const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

const { fakeProducts } = require('../data/mocks');

describe('Checks products getAll', () => { 
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

describe('Checks  getById', () => { 
	before(() => {
		  sinon.stub(productModel, 'getById').resolves(fakeProducts[0])
  })
  after(() => {
    productModel.getById.restore();
  })

  it('return an array with all products', async () => {
    const response = await productService.getById(1);
    
    expect(response).to.deep.eq(fakeProducts[0]);
  })
});