const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');
const { fakeProducts } = require('../data/mocks');

describe('Checks products getAll', () => { 
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

describe('Checks  getById', () => { 
	before(() => {
		  sinon.stub(connection, 'execute').resolves([fakeProducts])
  })
  after(() => {
    connection.execute.restore();
  })

  it('return an array with all products', async () => {
    const response = await productModel.getById(1);

    expect(response).to.deep.eq(fakeProducts[0]);
  })
});