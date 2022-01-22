import classes from './CartItem.module.css';

const CartItem = props => {
  const { title, total, price } = props.item;
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.removeFromCart}>-</button>
          <button onClick={props.addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
