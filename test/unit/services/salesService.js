const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

const { fakeSales } = require('../data/mocks');

describe('Checks products getAll', () => { 
	before(async () => {
    sinon.stub(salesModel, 'getAll').resolves(fakeSales);
  })
  after(() => {
    salesModel.getAll.restore();
  })

  it('return an array with all products', async () => {
    const response = await salesService.getAll();

    expect(response).to.be.equal(fakeSales);
  })

	it('need to have a lenght of 3', async () => {
		const response = await salesService.getAll();
		
		expect(response).to.have.length(3)
	})
})

describe('Checks  getById', () => { 
	before(() => {
		  sinon.stub(salesModel, 'getById').resolves(fakeSales[0])
  })
  after(() => {
    salesModel.getById.restore();
  })

  it('return an array with all products', async () => {
    const response = await salesService.getById(1);
    
    expect(response).to.deep.eq(fakeSales[0]);
  })
});