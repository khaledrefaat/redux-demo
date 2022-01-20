import React, { useState } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';

import { authActions } from '../store/auth-slice';

const Auth = () => {
  const [emailTerm, setEmailTerm] = useState('');
  const [passwordTerm, setPasswordTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
    if (emailTerm.length > 0 && passwordTerm.length > 0) {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={e => setEmailTerm(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={e => setPasswordTerm(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
