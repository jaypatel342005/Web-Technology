const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../serverofproduct');
const Product = require('../models/Product');

chai.use(chaiHttp);
const { expect } = chai;

describe('Product API', () => {
  before(async () => {
    // Clear the products collection before testing
    await Product.deleteMany();
  });

  it('should create a new product', (done) => {
    const newProduct = {
      name: 'Test Product',
      price: 50,
      category: 'Electronics',
      description: 'A great product',
      stock: 100,
      brand: 'TestBrand',
      warranty: '1 year'
    };

    chai.request(app)
      .post('/api/products')
      .send(newProduct)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.include({ name: 'Test Product', price: 50 });
        done();
      });
  });

  it('should get all products', (done) => {
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  it('should get a product by ID', (done) => {
    const product = new Product({
      name: 'Product by ID',
      price: 100,
      category: 'Clothing',
      stock: 50,
      brand: 'BrandByID'
    });
    product.save((err, savedProduct) => {
      chai.request(app)
        .get(`/api/products/${savedProduct._id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.include({ name: 'Product by ID' });
          done();
        });
    });
  });

  it('should update a product by ID', (done) => {
    const product = new Product({
      name: 'Product to Update',
      price: 75,
      category: 'Clothing',
      stock: 20,
      brand: 'BrandUpdate'
    });
    product.save((err, savedProduct) => {
      chai.request(app)
        .put(`/api/products/${savedProduct._id}`)
        .send({ price: 80 })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data.price).to.equal(80);
          done();
        });
    });
  });

  it('should delete a product by ID', (done) => {
    const product = new Product({
      name: 'Product to Delete',
      price: 150,
      category: 'Gadgets',
      stock: 30,
      brand: 'BrandDelete'
    });
    product.save((err, savedProduct) => {
      chai.request(app)
        .delete(`/api/products/${savedProduct._id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Product deleted successfully');
          done();
        });
    });
  });
});
