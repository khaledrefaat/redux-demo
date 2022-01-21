const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  product: {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    total: Number,
  },
  quantity: Number,
});

module.exports = model('Cart', cartSchema);
