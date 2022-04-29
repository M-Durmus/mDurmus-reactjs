import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';



export default function Navbar() {

const navigate=useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Avatar
        alt="UPaymetStore"
        src={logo}
        onClick={() => navigate('/')}
        sx={{ width: 56, height: 56 }}
      />
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UPaymentStore
          </Typography>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
