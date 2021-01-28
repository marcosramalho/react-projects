import React from 'react';
import Hero from './components/Hero';
import Products from './components/products';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Chosse your favorite" data={productData} />
    </Router>
  );
}

export default App;
