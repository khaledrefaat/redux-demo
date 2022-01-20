import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';

import React, { useState } from 'react';

import classes from './Counter.module.css';

const Counter = () => {
  const [value, setValue] = useState(0);

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(counterActions.increment(value));
  const decrementHandler = () => dispatch(counterActions.decrement(value));

  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="number"
      />
      <div className={classes.buttonsContainer}>
        <button onClick={decrementHandler} className={classes.button}>
          decrement
        </button>
        <button onClick={incrementHandler} className={classes.button}>
          increment
        </button>
      </div>
      <button
        onClick={toggleCounterHandler}
        className={`${classes.button} ${classes.toggle}`}
      >
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
