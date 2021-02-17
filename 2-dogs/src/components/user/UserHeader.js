import React, { useState } from 'react';
import UserHeaderNav from './userHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/postar':
        setTitle('Post sua foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
