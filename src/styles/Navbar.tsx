import { styled } from '@mui/material/styles';
import { List } from '@mui/material';
import { Box } from '@mui/system';
import { Color } from './theme';

export const NavbarContainer = styled(Box)(()=>({
    display:'flex',
    padding:'10px 20px',
    justifyContent:'space-between'
}));
export const NavbarList = styled(List)(() =>({
    padding:' 0px 10px',
    flexGrow: 1,
    fontSize:'18px',
    cursor:'pointer',
    color:Color.primary,
    display:'inline-block',
    fontFamily:'sans-serif arial' ,
    textTransform:'capitalize',
}));
export const MyList = styled(List)(()=>({
    // display: type === 'row ' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent:'space-between',
    // justifyContent:'center',
    margin:'0px 10px'
}))
export const MenuList = styled(List)(()=>({
    width:'100vw',
    left:0,
    height:'50px',
    display:'flex',
    cursor:'pointer',
    fontSize:'18px',
    padding:'10px 0px',
    color:Color.primary,
    fontFamily:' sans-serif' ,
    alignItems:'center',
    textTransform:'capitalize'
}))

export const MyMenu = styled(Box)(()=>({
    position:'absolute',
   marginTop:'25px',
   height:'80vh',
   display:'block',
   left:0,
//    backgroundColor:Color.light
}))
