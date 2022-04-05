const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

const { fakeSales, fakeCreatedSale } = require('../data/mocks');
describe('Service layer - sales', () => { 
  describe('get all sales', () => { 
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

    it('when successful', async () => {
      const response = await salesService.getById(1);
      
      expect(response).to.deep.eq(fakeSales[0]);
    })
  });
  describe('Checks createSale', () => {

    beforeEach(async () => {
      sinon.stub(salesModel, 'createSale').resolves({ id: 1, itemsSold: fakeCreatedSale});
    });

    afterEach(async () => {
      salesModel.createSale.restore();
    });

    it('when successful', async () => {
      const response = await salesService.createSale(fakeCreatedSale);

      expect(response).to.deep.equal({ id: 1, itemsSold: fakeCreatedSale })
    })

  });
});