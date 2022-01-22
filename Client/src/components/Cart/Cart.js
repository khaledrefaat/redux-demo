import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../../store/cart-actions';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart);

  const handelAddToCart = cartItem => dispatch(addToCart(cartItem));
  const handelRemoveFromCart = cartId => dispatch(removeFromCart(cartId));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.length > 0 &&
          cart.map(item => (
            <CartItem
              addToCart={() => handelAddToCart(item)}
              removeFromCart={() => handelRemoveFromCart(item._id)}
              key={Math.random()}
              item={item.product}
              quantity={item.quantity}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
