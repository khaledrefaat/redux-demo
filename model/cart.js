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
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = model('Cart', cartSchema);
