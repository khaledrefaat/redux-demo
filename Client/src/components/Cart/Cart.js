import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = props => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.length > 0 &&
          cart.map(cartItem => (
            <CartItem key={Math.random()} item={cartItem} />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
