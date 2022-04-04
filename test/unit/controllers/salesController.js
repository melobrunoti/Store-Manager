const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');
const { fakeSales } = require('../data/mocks');

describe('calls the salesController getAll', () => { 
  describe('when succesfull', () => { 
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

  it('sucess case', async () => {
    await salesController.getAll(request, response);

    expect(response.status.calledWith(200)).to.be.true;
  })
})
})

describe('calls the salesController getById', () => { 
  describe('when succesfull', () => { 
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

  it('sucess case', async () => {
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

  it('fail case', async () => {
    await salesController.getById(request, response);

    expect(response.status.calledWith(404)).to.be.true;
    expect(response.json.calledWith(fakeSales[0])).to.be.false;
  })
});
});

