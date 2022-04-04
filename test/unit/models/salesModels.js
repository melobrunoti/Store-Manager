const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');
const { fakeSales } = require('../data/mocks');

describe('Checks products getAll', () => { 
	before(async () => {
    sinon.stub(connection, 'execute').resolves([fakeSales]);
  })
  after(() => {
    connection.execute.restore();
  })

  it('return an array with all properties', async () => {
    const response = await salesModel.getAll();
    expect(response[0]).to.have.a.property('saleId');
    expect(response[0]).to.have.a.property('date');
    expect(response[0]).to.have.a.property('productId');
    expect(response[0]).to.have.a.property('quantity');
  })

	it('check all returns', async () => {
		const response = await salesModel.getAll();
		expect(response).to.have.length(3)
    expect(response).to.be.equal(fakeSales);
	})
})

describe('Checks  getById', () => { 
	before(() => {
		  sinon.stub(connection, 'execute').resolves([fakeSales[0]])
  })
  after(() => {
    connection.execute.restore();
  })

  it('return an array with all products', async () => {
    const response = await salesModel.getById(1);

    expect(response).to.be.equal(fakeSales[0]);
  })
});
