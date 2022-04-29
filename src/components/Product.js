import React, { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CardActionArea, CardContent, CardMedia, Typography,Card } from "@mui/material";


const PRODUCT_API_URL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(PRODUCT_API_URL + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        
      });
  }, [id]);

  if (!product?.id?.length) return null;

  return <div>
    <h3 style={{ textAlign: 'center', position: 'relative' }}>
      Details
      <KeyboardBackspaceIcon onClick={() => navigate('/')} fontSize="large" style={{ position: 'absolute', left: 0 }} />
    </h3>
    <Card sx={{ maxWidth: 650 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          width="auto"
          image={product.Avatar || product.avatar}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.description} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Typography variant="body2" color="text.secondary">
          {product.price} $
          </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
};

export default Product;
