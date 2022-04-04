const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');

const { fakeProducts } = require('../data/mocks');

describe('calls the productController getAll', () => { 
  describe('when succesfull', () => { 
  const response = {};
  const request = {};
	before(() => {
    sinon.stub(productService, 'getAll').resolves(fakeProducts);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  })
  after(() => {
    productService.getAll.restore();
  })

  it('sucess case', async () => {
    await productController.getAll(request, response);

    expect(response.status.calledWith(200)).to.be.true;
  })
})
})

describe('calls the productController getById', () => { 
  describe('when succesfull', () => { 
  const response = {};
  const request = {};
	before(() => {
    sinon.stub(productService, 'getById').resolves(fakeProducts[0]);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub()
    request.params = { id: 1 }
  })
  after(() => {
    productService.getById.restore();
  })

  it('sucess case', async () => {
    await productController.getById(request, response);

    expect(response.status.calledWith(200)).to.be.true;
    expect(response.json.calledWith(fakeProducts[0])).to.be.true;
  })
});

describe('when fails', () => { 
  const response = {};
  const request = {};
	before(() => {
    sinon.stub(productService, 'getById').resolves(false);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub()
    request.params = { id: 1 }
  })
  after(() => {
    productService.getById.restore();
  })

  it('fail case', async () => {
    await productController.getById(request, response);

    expect(response.status.calledWith(404)).to.be.true;
    expect(response.json.calledWith(fakeProducts[0])).to.be.false;
  })
});

describe('Checks createProduct', () => { 
  describe('when sucessfull', () => { 
    const response = {};
    const request = {};
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub()
      request.params = { id: 1 }
      request.body = { name: 'A volta dos que nao foram', quantity: 1 }
      
      sinon.stub(productService, 'createProduct').resolves(fakeProducts[0]);
    })
    afterEach(() => {
      productService.createProduct.restore();
    })

    it('sucess case', async () => {
      await productController.createProduct(request, response);

      expect(response.status.calledWith(201)).to.be.true;
      expect(response.json.calledWith(fakeProducts[0])).to.be.true;
    })
  });
  });
  describe('Checks updateProduct', () => { 
    describe('when sucessfull', () => { 
      const response = {};
      const request = {};
      beforeEach(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub()
        request.params = { id: 1 }
        request.body = { name: 'A volta dos que nao foram', quantity: 1 }
        
        sinon.stub(productService, 'updateProduct').resolves(fakeProducts[0]);
      })
      afterEach(() => {
        productService.updateProduct.restore();
      })
  
      it('sucess case', async () => {
        await productController.updateProduct(request, response);
  
        expect(response.status.calledWith(200)).to.be.true;
        expect(response.json.calledWith(fakeProducts[0])).to.be.true;
      })
    });
});
});
