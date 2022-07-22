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
    fontSize:'1rem',
    color:Color.primary,
    display:'inline-block',
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
    display:'block',
    fontSize:'1.5rem',
    padding:'10px 0px',
    color:Color.primary,
    textTransform:'capitalize'
}))

export const MyMenu = styled(Box)(()=>({
    position:'absolute',
   marginTop:'25px',
   height:'80vh',
//    backgroundColor:Color.light
}))
