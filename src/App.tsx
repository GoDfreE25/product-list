import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { loadProducts } from './store/actions';

export const App: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App__content">
        <ProductList />
      </div>
    </div>
  )
})