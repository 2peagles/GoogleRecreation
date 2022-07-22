import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Color } from '../../styles/theme';
import { Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MenuList, MyMenu} from '../../styles/Navbar';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';


export const MobileDrawer = () => {
    const [menu, setMenu]= useState(false);
    const handleClick=()=>setMenu(!menu)
  return (
    <Box>
        <div onClick={handleClick}>
           { !menu ? <MenuIcon /> :
             <>
                <CloseIcon />
                    <MyMenu>
                        <MenuList>Phones</MenuList>
                        <MenuList>Earbuds</MenuList>
                        <MenuList> smart Home</MenuList>
                        <MenuList>laptops</MenuList>
                        <MenuList>subscriptions</MenuList>
                        <MenuList>offers</MenuList>
                            <Divider sx={{width:'100vw', position:'absolute', color:Color.light}}/>
                        <MenuList><IndeterminateCheckBoxOutlinedIcon/> orders</MenuList>
                        <MenuList><HelpOutlineOutlinedIcon/> Help</MenuList>
                    </MyMenu>
                </>
              }
        </div>
    </Box>
  )
}
