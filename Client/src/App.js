import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { fetchCart } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();

  const toggleCart = useSelector(state => state.cart.showCart);

  useEffect(() => {
    dispatch(fetchCart());
  });

  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
