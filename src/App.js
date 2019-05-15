import React from 'react';
import Header from './components/header';
import Slider from './components/slider';
import ProductList from './components/productList';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <ProductList/>
      <Footer />
    </div>
  );
}

export default App;
