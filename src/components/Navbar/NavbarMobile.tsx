import React from 'react';
import { NavbarContainer, NavbarList } from '../../styles/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import { Actions }  from './Actions';
import { Color } from '../../styles/theme';
import { Box } from '@mui/system';
import { MyList } from '../../styles/Navbar';
import { MobileDrawer } from './MobileDrawer';


export const NavbarMobile = () => {
  return (
    <NavbarContainer>
      <Box maxWidth='xl'>
        <MyList>
          <NavbarList><MobileDrawer /></NavbarList>
          <NavbarList> <GoogleIcon sx={{ color:Color.light}}/></NavbarList>      
        </MyList>
      </Box>
      <Box>
        <Actions />
      </Box>
    </NavbarContainer>
  )
}
