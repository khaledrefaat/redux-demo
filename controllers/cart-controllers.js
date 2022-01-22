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
  const { title, description, price, _id } = req.body;

  let exsistingCart;
  try {
    exsistingCart = await Cart.findById(_id);
  } catch (err) {
    console.log(err);
  }

  try {
    if (exsistingCart) {
      exsistingCart.quantity++;
      exsistingCart.product.total =
        exsistingCart.product.total + exsistingCart.product.price;
      await exsistingCart.save();
      const cart = await Cart.find();
      return res.json(cart);
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

  let cart;
  try {
    cart = await Cart.find();
  } catch (err) {
    console.log(err);
  }

  res.json(cart);
};

exports.editCartItem = async (req, res, next) => {
  const { cartId } = req.body;

  try {
    const exsistingCartItem = await Cart.findById(cartId);

    if (exsistingCartItem.quantity === 1) {
      await exsistingCartItem.remove();
    } else {
      exsistingCartItem.quantity--;
      exsistingCartItem.total =
        exsistingCartItem.total - exsistingCartItem.price;
      await exsistingCartItem.save();
    }
  } catch (err) {
    console.log(err);
  }

  let cart;
  try {
    cart = await Cart.find();
  } catch (err) {
    console.log(err);
  }

  res.json(cart);
};
