import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './userContext';

import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login/login';
import User from './components/user/user';
import ProtectedRoute from './components/helper/protectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
