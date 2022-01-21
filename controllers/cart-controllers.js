const Cart = require('../model/cart');

exports.getCart = async (req, res, next) => {
  let cart;
  try {
    cart = await Cart.find();
  } catch (err) {
    console.log(err);
  }

  res.json(cart);
};

exports.addToCart = async (req, res, next) => {
  const { title, description, price, id } = req.body;

  let exsistingCart;
  try {
    exsistingCart = await Cart.findById(id);
  } catch (err) {
    console.log(err);
  }

  try {
    if (exsistingCart) {
      exsistingCart.quantity++;
      exsistingCart.product.total =
        exsistingCart.product.total + exsistingCart.product.price;
      await exsistingCart.save();
      return next();
    }
  } catch (err) {
    console.log(err);
  }

  const newCart = new Cart({
    product: { title, description, price, total: price },
    quantity: 1,
  });

  try {
    await newCart.save();
  } catch (err) {
    console.log(err);
  }

  return next();
};

exports.editCartItem = async (req, res, next) => {
  const { cartId } = req.params;
  const { title, price, description } = req.body;

  let exsistingCartItem;
  try {
    exsistingCartItem = await Cart.findById(cartId);
    const { product, quantity } = exsistingCartItem;
    product.title = title || product.title;
    product.price = price || product.price;
    product.description = description || product.description;
    product.total = quantity * product.price;
    await exsistingCartItem.save();
  } catch (err) {
    console.log(err);
  }

  res.json(exsistingCartItem);
};

exports.deleteCartItem = async (req, res, next) => {
  const { cartId } = req.params;

  try {
    await Cart.findByIdAndDelete(cartId);
  } catch (err) {
    console.log(err);
  }

  next();
};
