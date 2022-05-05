import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../api/api";
import { addProductActionCreator } from "../../store/actions";
import { getProductSelector } from "../../store/selectors"
import './ProductList.css';

export const ProductList: React.FC = () => {
  const products = useSelector(getProductSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((productFS) => dispatch(addProductActionCreator(productFS)));
  }, [dispatch]);

  const sortedProductByAlphabet = useMemo(() => {
    return products.sort((productA, productB) => (
      productA.name.toLocaleLowerCase().localeCompare(productB.name.toLocaleLowerCase())
    ));
  }, [products]);

  return (
    <div className="ProductList">
      <div className="ProductList__list-container">
        <ul className="ProductList__list">
          {sortedProductByAlphabet.map(product => (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <p className="ProductList__paragraph">{product.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}