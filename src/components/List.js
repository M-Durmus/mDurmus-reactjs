import React from "react";
import Header from "./Header";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Grid } from "@mui/material";
import CardItem from "./Card";


const List = () => {
  const { products, selectedCategory, keyword } = useContext(AppContext);
  const navigate = useNavigate();

  return <div>
    <Header/>
    <h3 style={{ textAlign: 'center'  }}>Products List</h3>
    <Box sx={{ width: '100%',margin:"auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

       {products.filter((product) => {
          let inResult = true;
          if (keyword?.length >= 1) {
            inResult = product.name.toLowerCase().includes(keyword.toLowerCase());
          }
          if (selectedCategory?.length >= 1 && product?.category?.length >= 1) {
            inResult = product.category.toLowerCase().includes(selectedCategory.toLowerCase()) && inResult;
          }
          return inResult;})
       .map((item)=>{
         return(
          <Grid    xs={12} sm={6} md={4} >
            <CardItem   item={item}/>
          </Grid>
         )
       })}
       
      </Grid>
    </Box>
    {/* <table style={{ width: '100%' }}>
      <tbody>
        {products.filter((product) => {
          let inResult = true;
          if (keyword?.length >= 1) {
            inResult = product.name.toLowerCase().includes(keyword.toLowerCase());
          }
          if (selectedCategory?.length >= 1 && product?.category?.length >= 1) {
            inResult = product.category.toLowerCase().includes(selectedCategory.toLowerCase()) && inResult;
          }
          return inResult;
        }).map((product, index) => {
          return <ListItem product={product} index={index} key={product.id} />;
          
        })}
      </tbody>
    </table> */}
    <p style={{ textAlign: 'center' }}>
      <AddCircleOutlineIcon color="primary" fontSize="large" onClick={() => navigate('/create')} variant="contained">Add</AddCircleOutlineIcon>
    </p>
  </div>;
};

export default List;
