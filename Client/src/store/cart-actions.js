import { cartActions } from './cart-slice';

export const addToCart = cartData => async dispatch => {
  try {
    const res = await fetch('http://localhost:9000/api/cart', {
      method: 'POST',
      body: JSON.stringify(cartData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const cart = await res.json();
    dispatch(cartActions.updateCart(cart));
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCart = cartId => async dispatch => {
  try {
    const res = await fetch('http://localhost:9000/api/cart', {
      method: 'PATCH',
      body: JSON.stringify({ cartId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const cart = await res.json();
    dispatch(cartActions.updateCart(cart));
  } catch (err) {}
};

export const fetchCart = () => async dispatch => {
  try {
    const res = await fetch('http://localhost:9000/api/cart');
    const cart = await res.json();
    dispatch(cartActions.updateCart(cart));
  } catch (err) {
    console.log(err);
  }
};
