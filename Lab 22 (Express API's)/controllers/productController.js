const Product = require('../models/Product');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Create new product
// @route   POST /api/products
exports.createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    data: product,
  });
});

// @desc    Get all products with pagination and filtering
// @route   GET /api/products
exports.getAllProducts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, category, brand, priceRange } = req.query;
  
  const filter = {};
  
  if (category) filter.category = category;
  if (brand) filter.brand = brand;
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split('-');
    filter.price = { $gte: minPrice, $lte: maxPrice };
  }

  const products = await Product.find(filter)
    .limit(Number(limit))
    .skip((page - 1) * limit);
  
  const totalProducts = await Product.countDocuments(filter);
  
  res.status(200).json({
    success: true,
    count: products.length,
    totalProducts,
    page,
    totalPages: Math.ceil(totalProducts / limit),
    data: products,
  });
});

// @desc    Get product by ID
// @route   GET /api/products/:id
exports.getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
  } else {
    res.status(200).json({ success: true, data: product });
  }
});

// @desc    Update product by ID
// @route   PUT /api/products/:id
exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
  } else {
    res.status(200).json({ success: true, data: product });
  }
});

// @desc    Delete product by ID
// @route   DELETE /api/products/:id
exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
  } else {
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  }
});
