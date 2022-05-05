import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList/ProductList';

export const App: React.FC = React.memo(() => {
  return (
    <div className="App">
      <div className="App__content">
        <ProductList />
      </div>
    </div>
  )
})