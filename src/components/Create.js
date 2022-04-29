
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const developerEmail = 'mdurmus9114@gmail.com';
const ADD_PRODUCT_API = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/';

const Create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setNewProductCategory] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');
  const { setProducts, categories } = useContext(AppContext);
  const navigate = useNavigate();


  const handleAdd = () => {
    if (!name.length || price <= 0 || !category.length || !description.length || !avatar.length) return;

    const product = {
      name,
      price,
      category,
      description,
      avatar,
      developerEmail
    }
    
    fetch(ADD_PRODUCT_API, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts((oldProducts) => [...oldProducts, data]);
        navigate('/');
      });
  }


  return (
    <div>
      <h3 style={{ textAlign: 'center', position: 'relative' }}>
        <KeyboardBackspaceIcon onClick={() => navigate('/')} fontSize="large" style={{ position: 'absolute', left: 0 }} />
        Add New Product
      </h3>
      Name:
      <input className='form-input' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      Price:
      <input className='form-input' type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} placeholder="Price" />
      Category:
      <select className='form-input' onChange={(e) => setNewProductCategory(e.target.value)}>
        <option value="">Please select</option>
        {
          categories.map(category => {
            return <option key={category.id} value={category.name}>{category.name}</option>
          })
        }
      </select>
      Description:
      <textarea rows={5} className='form-input' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      Avatar:
      <input className='form-input' value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar" />
      DeveloperEmail:
      <input className='form-input' value={developerEmail} readOnly />
      <Button variant="contained" onClick={handleAdd} style={{ width: '100%' }}>Submit product</Button>
    </div >
  )
}

export default Create;
