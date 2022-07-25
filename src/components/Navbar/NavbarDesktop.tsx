import React from 'react';
import { NavbarContainer, MyList, NavbarList } from '../../styles/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import { Actions } from './Actions';
import { Box } from '@mui/material';

export const NavbarDesktop = () => {
  return (
    <NavbarContainer>
        <Box>
       <MyList>
           <NavbarList><GoogleIcon /></NavbarList>
           <NavbarList> phones</NavbarList>
           <NavbarList>earbuds</NavbarList>
           <NavbarList>watches</NavbarList>
           <NavbarList>smart home</NavbarList>
           <NavbarList> laptops</NavbarList>
           <NavbarList>subscriptions</NavbarList>
           <NavbarList>offers</NavbarList>
       </MyList>
      </Box>
       <Actions />  
    </NavbarContainer>
  );
}
