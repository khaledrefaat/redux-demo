const express = require('express');
const router = express.Router();

const {
  getCart,
  addToCart,
  editCartItem,
  deleteCartItem,
} = require('../controllers/cart-controllers');

router.get('/', getCart);

router.post('/', addToCart);

router.patch('/:cartId', editCartItem);

router.delete('/:cartId', deleteCartItem);

module.exports = router;
