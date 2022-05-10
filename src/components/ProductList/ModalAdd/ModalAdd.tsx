import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Product } from '../../../types';
import { addedProduct } from '../../../api/product.api';
import { addProduct } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import { color } from '@mui/system';

interface Props {
  closeModal: (name: boolean) => void;
  open: boolean;
}

export const ModalAdd: React.FC<Props> = ({ closeModal, open }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [sizeWidth, setSizeWidth] = useState(0);
  const [sizeHeight, setSizeHeight] = useState(0);
  const [weight, setWeight] = useState('');
  const [error, seetError] = useState('');

  const addProductList = async (product: Product) => {
    await addedProduct(product);
    dispatch(addProduct(product))
  }

  const resetForm = () => {
    setImageUrl('');
    setName('');
    setCount(0);
    setSizeWidth(0);
    setSizeHeight(0);
    setWeight('');
    seetError('');
  }

  const sumbitChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!imageUrl || !name || !count || !weight || !sizeHeight || !setSizeHeight) {
      seetError('Pleae input all input field');
    } else {
      addProductList({
        id: Math.trunc(Date.now()),
        imageUrl,
        name,
        count,
        weight,
        size: {
          width: sizeWidth,
          height: sizeHeight,
        },
        comments: [],
      });
      resetForm();
    }
  }

  const handleClose = () => {
    closeModal(false);
  };

  return (
  <div>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Add Product</DialogTitle>
    {error && <DialogTitle style={{color: "red"}}>{error}</DialogTitle>}
    <DialogContent>
    <DialogContentText>
      Here you can enter details to add the product.
    </DialogContentText>
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
        onChange={(event) => setCount(Number(event.target.value))}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Size Width" 
        variant="outlined" 
        type="text" 
        value={sizeWidth}
        onChange={(event) => setSizeWidth(Number(event.target.value))}
        style={{margin: "10px"}}
      />
      <TextField 
        id="outlined-basic" 
        label="Size Heigt" 
        variant="outlined" 
        type="text" 
        value={sizeHeight}
        onChange={(event) => setSizeHeight(Number(event.target.value))}
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
      <Button type='submit' form="myform">Add Product</Button>
      <Button onClick={handleClose}>Cancell</Button>
    </DialogActions>
  </Dialog>
  </div>
  );
}
