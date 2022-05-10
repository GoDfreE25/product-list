import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Product } from '../../../types';
import { addedProduct } from '../../../api/product.api';
import { addProduct } from '../../../store/actions';
import { useDispatch } from 'react-redux';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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

  const addProductList = async (product: Product) => {
    await addedProduct(product);
    dispatch(addProduct(product))
  }

  console.log(addProductList({
    id: Math.random(),
    imageUrl,
    name,
    count,
    weight,
    size: {
      width: sizeWidth,
      height: sizeHeight,
    },
    comments: [],
  }));
  

  const sumbitChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProductList({
      id: Math.random(),
      imageUrl,
      name,
      count,
      weight,
      size: {
        width: sizeWidth,
        height: sizeHeight,
      },
      comments: [],
    })
  }

  const handleClose = () => {
    closeModal(false);
  };

  return (
  <div>
    {/* <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    > */}
      <div>
        <form onSubmit={sumbitChange}>
        {/* <Box sx={{ ...style, width: 300 }}
        component="form"
        noValidate
        autoComplete="off"
      > */}
      <TextField 
      id="outlined-basic" 
      label="ImageUrl" 
      variant="outlined" 
      type="text" 
      value={imageUrl}
      onChange={(event) => setImageUrl(event.target.value)}
      style={{marginBottom: "10px"}}
    />
    <TextField 
      id="outlined-basic" 
      label="Name" 
      variant="outlined" 
      type="text"
      name='name'
      value={name}
      onChange={(event) => setName(event.target.value)}
      style={{marginBottom: "10px"}}
    />
    <TextField 
      id="outlined-basic" 
      label="Count" 
      variant="outlined" 
      type="text" 
      value={count}
      onChange={(event) => setCount(Number(event.target.value))}
      style={{marginBottom: "10px"}}
    />
    <TextField 
      id="outlined-basic" 
      label="Size Width" 
      variant="outlined" 
      type="text" 
      value={sizeWidth}
      onChange={(event) => setSizeWidth(Number(event.target.value))}
      style={{marginBottom: "10px"}}
    />
    <TextField 
      id="outlined-basic" 
      label="Size Heigt" 
      variant="outlined" 
      type="text" 
      value={sizeHeight}
      onChange={(event) => setSizeHeight(Number(event.target.value))}
      style={{marginBottom: "10px"}}
    />
    <TextField 
      id="outlined-basic" 
      label="Weight" 
      variant="outlined" 
      type="text" 
      value={weight}
      onChange={(event) => setWeight(event.target.value)}
      style={{marginBottom: "10px"}}
    />
    <Button
      style={{marginBottom: "10px"}}
      variant="contained"
      type="submit"
      onClick={() => sumbitChange}
    >
      Added Product
    </Button>
    <Button
      
      variant="contained"
      type="button"
      onClick={() => handleClose()}
    >
      Cancel
    </Button>
      {/* </Box> */}
        </form>
      
      </div>
    {/* </Modal> */}
  </div>
  );
}
