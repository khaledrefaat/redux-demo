import { useDispatch } from 'react-redux';

import { addToCart } from '../../store/cart-actions';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = props => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const handelAddToCart = () =>
    dispatch(addToCart({ title, price, description }));

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handelAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
