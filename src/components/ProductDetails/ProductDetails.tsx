import React, { useEffect, useState } from "react";
import './ProductDetail.css';
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../api/product.api";
import { selectProduct } from "../../store/actions";
import { getProductSelector } from "../../store/selectors";
import { getSelectedProductIdSelector } from "../../store/selectors";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HeightIcon from '@mui/icons-material/Height';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ScaleIcon from '@mui/icons-material/Scale';
import { ModalEdit } from "../ModalEdit/ModalEdit";


export const ProductDetails: React.FC = React.memo(() => {
  const product = useSelector(getProductSelector);
  const productId = useSelector(getSelectedProductIdSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getProductById(productId)
      .then(product => dispatch(selectProduct(product)));
  },[dispatch, productId]);

  return (
    <div>
  <Link style={{textDecoration: "none"}} to="/">
    <Button variant="contained">
      Go Back
    </Button>
  </Link>
  <div className="Card">
    <Card sx={{ maxWidth: 550, height: 460 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="260"
        image={product?.imageUrl}
        alt={product?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" style={{textAlign: "center"}}>
        {product?.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{textAlign: "center"}}>
          <WarehouseIcon /> Products in storage {product?.count}
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{textAlign: "center"}}>
          <HeightIcon /> Product Height {product?.size.height}
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{textAlign: "center"}}>
          <ArrowRightAltIcon /> Product Width {product?.size.width}
        </Typography>
        <Typography variant="body1" color="text.secondary" style={{textAlign: "center"}}>
          <ScaleIcon /> Product Weight {product?.weight}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Button 
    variant="contained"
    type="button"
    onClick={() => setOpen(true)}
    style={{marginTop: "15px"}}
  >
    Edit Product
  </Button>
  {open && 
  <ModalEdit 
    closeModal={setOpen}
    open={open}
  />}
</div>
  </div>
  );
});