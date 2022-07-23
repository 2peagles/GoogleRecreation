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
           { !menu ? <MenuIcon sx={{cursor:'pointer'}} /> :
             <>
                <CloseIcon sx={{cursor:'pointer'}}/>
                    <MyMenu>
                        <MenuList>
                            <Box sx={{width:'70px', display:'inline-block'}}>
                                 <img src='/Images/Nav/pixelmenu.jpg'alt='pixel' height={'50px'}/> 
                            </Box>
                            <Box sx={{display:'inline-block'}}>
                                phones
                            </Box>
                            </MenuList>
                        <MenuList>
                            <Box sx={{width:'70px', display:'inline-block'}}>
                                 <img src='/Images/Nav/earbuds.jpg'alt='pixel' height={'50px'} /> 
                            </Box>
                            <Box sx={{display:'inline-block'}}>
                                earbuds
                            </Box>
                            </MenuList>
                            <MenuList>
                                <Box sx={{width:'70px', display:'inline-block'}}>
                                    <img src='/Images/Nav/fitbitmenu.jpg'alt='pixel' height={'50px'}  />  
                                </Box>
                                <Box sx={{display:'inline-block'}}>
                                    watches
                                </Box>                                            
                            </MenuList>
                        <MenuList>
                            <Box sx={{width:'70px', display:'inline-block'}}>
                              <img src='/Images/Nav/pixelmenu.jpg'alt='pixel' height={'50px'}/>  
                            </Box>
                            <Box sx={{display:'inline-block'}}>
                                smart home
                             </Box>
                        </MenuList>
                        <MenuList>
                            <Box sx={{width:'70px', display:'inline-block'}}>
                            <img src='/Images/Nav/pixelbookgomenu.jpg'alt='pixel' height={'40px'}/> 
                            </Box>
                            <Box sx={{ display:'inline-block'}}>
                            laptops
                            </Box>
                        </MenuList>
                        <MenuList>
                            <Box sx={{width:'70px', display:'inline-block'}}>
                            <img src='/Images/Nav/pixelmenu.jpg'alt='pixel' height={'50px'}/> 
                            </Box>
                            <Box sx={{ display:'inline-block'}}>
                            subscriptions
                            </Box>
                        </MenuList>
                        <MenuList> 
                            <Box sx={{width:'70px', display:'inline-block'}}>
                                <img src='/Images/Nav/pixelmenu.jpg'alt='pixel' height={'50px'}/> 
                            </Box>
                            <Box sx={{ display:'inline-block'}}>
                                offers
                            </Box>
                        </MenuList>
                            <Divider sx={{width:'100vw',margin:'20px', position:'absolute', color:Color.light}}/>
                            <MenuList sx={{ height:'20px', marginTop:'40px', justifyContent:'space-between', width:'13%'}}><IndeterminateCheckBoxOutlinedIcon/> orders</MenuList>
                            <MenuList sx={{ height:'20px', justifyContent:'space-between', width:'11%'}}><HelpOutlineOutlinedIcon/> Help</MenuList>
                    </MyMenu>
                </>
              }
        </div>
    </Box>
  )
}
