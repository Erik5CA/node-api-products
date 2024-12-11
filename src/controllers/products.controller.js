import Product from "../models/products.model.js";

export const createProduct = async (req, res) => {
  const { name, category, price, imageUrl } = req.body;
  const newProduct = new Product({
    name,
    category,
    price,
    imageUrl,
  });
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.json(product);
};

export const updateProductById = async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();
};
