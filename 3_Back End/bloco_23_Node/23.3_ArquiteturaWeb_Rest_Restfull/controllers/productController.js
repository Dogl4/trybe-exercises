const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/get-by-id/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    res.status(404).send({ message: 'Product not found' });
  }

  res.status(200).json(product);
});

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).send({ message: 'Falied to create user' })
  }

  res.send(newProduct);
});

router.delete('/delete-user/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ menssage: 'Falied to delete user' })
  }
});

router.put('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
  } catch(error) {
    res.status(500).send({ message: 'Falied to update user' });
  }
});

module.exports = router;
