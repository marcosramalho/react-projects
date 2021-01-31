import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../userContext';

import LoginForm from './loginForm';
import LoginCreate from './loginCreate';
import LoginPasswordLost from './loginPasswordLost';
import LoginpasswordReset from './loginPasswordReset';

import styles from './login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/">
            <LoginForm />
          </Route>
          <Route path="criar">
            <LoginCreate />
          </Route>
          <Route path="perdeu">
            <LoginPasswordLost />
          </Route>
          <Route path="resetar">
            <LoginpasswordReset />
          </Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
