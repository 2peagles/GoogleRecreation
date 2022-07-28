import { styled } from "@mui/material/styles";
import { Box, ListItemButton , Grid } from '@mui/material';

export const FooterContainer = styled( Grid )(()=>({
    height:'150vh',
    width:'100vw',
    // display:'flex',
    // textAlign: 'left',
    // alignItems:'center',
    // justifyContent:'center'
}))
export const FooterLinkContainer =styled( ListItemButton )(()=>({

}))
export const FooterIconContainer = styled( Box ) (()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
}))

export const FooterIcons=styled( Box )(()=>({
    display:'inline-block'
}))
export const FooterList = styled(ListItemButton)(() => ({
    display: 'inline-block'
}))