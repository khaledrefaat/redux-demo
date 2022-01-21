const express = require('express');
const router = express.Router();

const {
  getCart,
  postAddToCart,
  deleteFromCart,
} = require('../controllers/cart-controllers');

router.get('/', getCart);

router.post('/', postAddToCart);

router.delete('/:id', deleteFromCart);

module.exports = router;
