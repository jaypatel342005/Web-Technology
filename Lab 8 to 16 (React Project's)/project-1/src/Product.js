import React from 'react';

// Sample product data with placeholder images
const productData = [
  {
    "ProductID": 1,
    "ProductName": "Smartphone XYZ",
    "ProductCategory": "Electronics",
    "ProductPrice": "$699",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Smartphone+XYZ"
  },
  {
    "ProductID": 2,
    "ProductName": "Wireless Headphones",
    "ProductCategory": "Accessories",
    "ProductPrice": "$149",
    "ProductAvailability": "Out of Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Wireless+Headphones"
  },
  {
    "ProductID": 3,
    "ProductName": "Smartwatch Pro",
    "ProductCategory": "Wearables",
    "ProductPrice": "$249",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Smartwatch+Pro"
  },
  {
    "ProductID": 4,
    "ProductName": "4K Ultra HD TV",
    "ProductCategory": "Electronics",
    "ProductPrice": "$1,299",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=4K+Ultra+HD+TV"
  },
  {
    "ProductID": 5,
    "ProductName": "Bluetooth Speaker",
    "ProductCategory": "Accessories",
    "ProductPrice": "$89",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Bluetooth+Speaker"
  },
  {
    "ProductID": 6,
    "ProductName": "Gaming Laptop",
    "ProductCategory": "Computers",
    "ProductPrice": "$1,799",
    "ProductAvailability": "Out of Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Gaming+Laptop"
  },
  {
    "ProductID": 7,
    "ProductName": "Noise-Canceling Earbuds",
    "ProductCategory": "Accessories",
    "ProductPrice": "$199",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Noise-Canceling+Earbuds"
  },
  {
    "ProductID": 8,
    "ProductName": "Tablet Pro 10.5",
    "ProductCategory": "Electronics",
    "ProductPrice": "$649",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Tablet+Pro+10.5"
  },
  {
    "ProductID": 9,
    "ProductName": "Digital Camera",
    "ProductCategory": "Electronics",
    "ProductPrice": "$799",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Digital+Camera"
  },
  {
    "ProductID": 10,
    "ProductName": "Ergonomic Office Chair",
    "ProductCategory": "Furniture",
    "ProductPrice": "$349",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Office+Chair"
  },
  {
    "ProductID": 11,
    "ProductName": "Portable SSD 1TB",
    "ProductCategory": "Computers",
    "ProductPrice": "$129",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Portable+SSD+1TB"
  },
  {
    "ProductID": 12,
    "ProductName": "Electric Toothbrush",
    "ProductCategory": "Personal Care",
    "ProductPrice": "$89",
    "ProductAvailability": "Out of Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Electric+Toothbrush"
  },
  {
    "ProductID": 13,
    "ProductName": "Air Fryer",
    "ProductCategory": "Home Appliances",
    "ProductPrice": "$159",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Air+Fryer"
  },
  {
    "ProductID": 14,
    "ProductName": "Smart Thermostat",
    "ProductCategory": "Home Appliances",
    "ProductPrice": "$249",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Smart+Thermostat"
  },
  {
    "ProductID": 15,
    "ProductName": "Electric Kettle",
    "ProductCategory": "Home Appliances",
    "ProductPrice": "$49",
    "ProductAvailability": "In Stock",
    "ProductImage": "https://via.placeholder.com/150?text=Electric+Kettle"
  }
];

function Product() {
    return (
      <div className="container mt-5">
        <div className="row">
          {productData.map(product => (
            <div key={product.ProductID} className="col-md-4 mb-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src={product.ProductImage} className="card-img-top" alt={product.ProductName} />
                <div className="card-body">
                  <h5 className="card-title">{product.ProductName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{product.ProductCategory}</h6>
                  <p className="card-text">
                    <strong>Price:</strong> {product.ProductPrice}<br />
                    <strong>Availability:</strong> {product.ProductAvailability}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Product;
