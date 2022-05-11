import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSelector } from '../../store/selectors';

interface Props {
  closeModal: (name: boolean) => void;
  open: boolean;
}

export const ModalEdit: React.FC<Props> = ({ closeModal, open }) => {
  const dispatch = useDispatch();
  const product = useSelector(getProductSelector);
  const [imageUrl, setImageUrl] = useState(`${product?.imageUrl}`);
  const [name, setName] = useState(`${product?.name}`);
  const [count, setCount] = useState(`${Number(product?.count)}`);
  const [sizeWidth, setSizeWidth] = useState(`${Number(product?.size.width)}`);
  const [sizeHeight, setSizeHeight] = useState(`${Number(product?.size.height)}`);
  const [weight, setWeight] = useState(`${product?.weight}`);
  const [error, seetError] = useState('');

  const resetForm = () => {
    setImageUrl('');
    setName('');
    setCount('0');
    setSizeWidth('0');
    setSizeHeight('0');
    setWeight('');
    seetError('');
  }

  const sumbitChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!imageUrl || !name || !count || !weight || !sizeHeight || !setSizeHeight) {
      seetError('Pleae input all input field');
    }
  };
  
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
      <Button type='submit' form="myform">Add Product</Button>
      <Button onClick={handleClose}>Cancell</Button>
    </DialogActions>
  </Dialog>
  </div>
  );
}
