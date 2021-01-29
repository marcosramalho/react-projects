import React from 'react';
import Hero from './components/Hero';
import Products from './components/products';
import Feature from './components/feature';
import Footer from './components/footer';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Chosse your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
