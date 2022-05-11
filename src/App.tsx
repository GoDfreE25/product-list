import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { loadProducts } from './store/actions';

export const App: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App__content">
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/producdetails' element={<ProductDetails />} />
        </Routes>
       
      </div>
    </div>
  )
})