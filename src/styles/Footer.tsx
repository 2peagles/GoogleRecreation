import { styled } from "@mui/material/styles";
import { Box, ListItemButton , Grid } from '@mui/material';

export const FooterContainer = styled( Grid )(()=>({
    minHeight:'120vh',
    // width:'100vw',
    width:'100%',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
export const FooterLinkContainer =styled( ListItemButton )(()=>({

}))
export const FooterIconContainer = styled(Box) (()=>({
    width:'100vw',
    height:'auto',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
}))

export const FooterIcons=styled( Box )(()=>({
    display:'inline-block'
}))
export const FooterList = styled(ListItemButton)(() => ({
    display: 'inline-block',
    padding:'20px',
}))