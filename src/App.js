import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Products from './component/Header/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
