import React from 'react';
import { NavbarContainer, MyList, NavbarList } from '../../styles/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import { Actions } from './Actions';

export const NavbarDesktop = () => {
  return (
    <NavbarContainer>
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
       <Actions />
    </NavbarContainer>
  );
}
