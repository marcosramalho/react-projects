import React from 'react';
import Hero from './components/Hero';
import Products from './components/products';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/products/data';
import Feature from './components/feature';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Chosse your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
    </Router>
  );
}

export default App;
