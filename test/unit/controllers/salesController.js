const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');
const { fakeSales } = require('../data/mocks');

describe('calls the salesController getAll', () => { 
  describe('get all sales', () => { 
  const response = {};
  const request = {};
	before(() => {
    sinon.stub(salesService, 'getAll').resolves(fakeSales);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  })
  after(() => {
    salesService.getAll.restore();
  })

  it('when successful', async () => {
    await salesController.getAll(request, response);

    expect(response.status.calledWith(200)).to.be.true;
  })
})
})

describe('calls the salesController getById', () => { 
  describe('get a sale by id', () => { 
  const response = {};
  const request = {};
	before(() => {
    sinon.stub(salesService, 'getById').resolves(fakeSales[0]);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub()
    request.params = { id: 1 }
  })
  after(() => {
    salesService.getById.restore();
  })

  it('when successful', async () => {
    await salesController.getById(request, response);

    expect(response.status.calledWith(200)).to.be.true;
    expect(response.json.calledWith(fakeSales[0])).to.be.true;
  })
});

describe('when fails', () => { 
  const response = {};
  const request = {};
	before(() => {
    sinon.stub(salesService, 'getById').resolves(false);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub()
    request.params = { id: 1 }
  })
  after(() => {
    salesService.getById.restore();
  })

  it('returns false', async () => {
    await salesController.getById(request, response);

    expect(response.status.calledWith(404)).to.be.true;
    expect(response.json.calledWith(fakeSales[0])).to.be.false;
  })
});
});

