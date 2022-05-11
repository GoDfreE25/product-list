import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeProduct } from "../../api/product.api";
import { removeProductById, setSelectedProductById } from "../../store/actions";
import { loadProductSelector } from "../../store/selectors";
import './ProductList.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ModalAdd } from "../ModalAdd/ModalAdd";
import { Link } from "react-router-dom";


export const ProductList: React.FC = () => {
  const products = useSelector(loadProductSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const sortedProductByAlphabet = useMemo(() => {
    return products.sort((productA, productB) => (
      productA.name.toLocaleLowerCase().localeCompare(productB.name.toLocaleLowerCase())
    ));
  }, [products]);

  const deleteProduct = async (productId: number) => {

    if(window.confirm("Are you sure wanted to delete the product?")) {
      await removeProduct(productId);
      dispatch(removeProductById(productId));
    } else {
      return;
    }
  };

  return (
    <div className="ProductList">
      <Button 
        variant="contained"
        type="button"
        onClick={() => setOpen(true)}
      >
        Add Product
      </Button>
      {open && 
      <ModalAdd 
        closeModal={setOpen}
        open={open}
      />}
      <div className="ProductList__list-container">
        <ul className="ProductList__list">
          {sortedProductByAlphabet.map(product => (
            <li key={product.id}>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="150"
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          type="button"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Button>
        <Link style={{textDecoration: "none"}} to="/producdetails">
        <Button 
          size="small"
          onClick={() => {
            dispatch(setSelectedProductById(product.id))
          }}
        >
          Learn More</Button>
        </Link>
      </CardActions>
    </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}