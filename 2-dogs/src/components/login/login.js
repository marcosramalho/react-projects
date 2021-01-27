import React from 'react';

import { Route, Routes } from 'react-router-dom';

import LoginForm from './loginForm';
import LoginCreate from './loginCreate';
import LoginPasswordLost from './loginPasswordLost';
import LoginpasswordReset from './loginPasswordReset';

const Login = () => {
  return (
    <div>
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
  );
};

export default Login;
