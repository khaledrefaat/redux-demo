const Cart = require('../model/cart');

exports.getCart = (req, res, next) => {
  console.log('get');
};

exports.postAddToCart = (req, res, next) => {
  console.log('post');
};

exports.deleteFromCart = (req, res, next) => {
  console.log('delete');
};
