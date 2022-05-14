import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSelector, getSelectedProductIdSelector } from '../../store/selectors';
import { editedProduct } from '../../api/product.api';
import { Product } from '../../types';
import { editProduct } from '../../store/actions';

interface Props {
  closeModal: (name: boolean) => void;
  open: boolean;
}

export const ModalEdit: React.FC<Props> = ({ closeModal, open }) => {
  const dispatch = useDispatch();
  const product = useSelector(getProductSelector);
  const productID = useSelector(getSelectedProductIdSelector);
  const [imageUrl, setImageUrl] = useState(`${product?.imageUrl}`);
  const [name, setName] = useState(`${product?.name}`);
  const [count, setCount] = useState(`${Number(product?.count)}`);
  const [sizeWidth, setSizeWidth] = useState(`${Number(product?.size.width)}`);
  const [sizeHeight, setSizeHeight] = useState(`${Number(product?.size.height)}`);
  const [weight, setWeight] = useState(`${product?.weight}`);

  const renameProduct = async (productId: number, product: Product) => {
    await editedProduct(productId, product);
    dispatch(editProduct(product))
  }

  const resetForm = () => {
    setImageUrl('');
    setName('');
    setCount('0');
    setSizeWidth('0');
    setSizeHeight('0');
    setWeight('');
  }

  const sumbitChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    renameProduct(productID, {
      id: Math.trunc(Date.now()),
      imageUrl,
      name,
      count: Number(count),
      weight,
      size: {
        width: Number(sizeWidth),
        height: Number(sizeHeight),
      },
      comments: [],
    });
    resetForm();
  }
  const handleClose = () => {
    closeModal(false);
  };

  return (
  <div>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Edit Product</DialogTitle>
    <DialogContent>
      <form onSubmit={sumbitChange} id="myform">
        <TextField 
        id="outlined-basic" 
        label="ImageUrl" 
        variant="outlined" 
        type="text" 
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        type="text"
        name='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Count" 
        variant="outlined" 
        type="text" 
        value={count}
        onChange={(event) => setCount(event.target.value)}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Size Width" 
        variant="outlined" 
        type="text" 
        value={sizeWidth}
        onChange={(event) => setSizeWidth(event.target.value)}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Size Heigt" 
        variant="outlined" 
        type="text" 
        value={sizeHeight}
        onChange={(event) => setSizeHeight(event.target.value)}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Weight" 
        variant="outlined" 
        type="text" 
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        style={{margin: "10px"}}
      />
  </form>
  </DialogContent>
    <DialogActions>
      <Button type='submit' form="myform">Update Product</Button>
      <Button onClick={handleClose}>Cancell</Button>
    </DialogActions>
  </Dialog>
  </div>
  );
}
