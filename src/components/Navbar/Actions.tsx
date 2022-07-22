import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Color } from '../../styles/theme';
import {MyList, NavbarList }from '../../styles/Navbar';
import React from 'react';
import { Box } from '@mui/system';


export const Actions = () => {
  return (
    <Box>
       <MyList>
          <NavbarList><SearchIcon /></NavbarList>
          <NavbarList><ShoppingCartIcon /></NavbarList>
          <NavbarList><AccountCircleIcon /></NavbarList> 
       </MyList>
    </Box>
  )
}
// advatar