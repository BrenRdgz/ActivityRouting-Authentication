import React, {useState} from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function NavBar() {
  const history = useHistory();
  const handleLogout=() =>{
    localStorage.removeItem('authorized');
    history.push("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
  spacing={8}
>
          
          <Link to="/"> <h2>Home</h2> </Link>
          <Link to="/posts"><h2>Posts</h2></Link>
                <NavLink to="/login">
                  <h2>Login</h2>
                </NavLink>
                <NavLink to="/" onClick={handleLogout}>
                <h2>Logout</h2>
                </NavLink> 
        </Stack>
      </AppBar>
      </Box>
  );
}
