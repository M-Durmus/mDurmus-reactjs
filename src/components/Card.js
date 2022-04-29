
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';




export default function CardItem(
    {item}
    
) {
 const navigate = useNavigate()
  const handleClick = ()=> {
      navigate(`/product/${item.id}` )
  }



  return (
    <CardActions onClick={handleClick} sx={{ maxWidth: "auto",display:"flex" , justifyContent:"center"}}>

   <Card 
   style={{width: "250px"}}
>

   
      <CardMedia 
        component="img"
        
        height="194"
        image={item.avatar || item.Avatar}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
        {item.name}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.primary">
        {item.price}$
        </Typography>
      </CardContent>
    
    
   
    </Card>
    </CardActions>
  );
}
