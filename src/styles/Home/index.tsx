import { Typography , Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { List } from '@mui/material';
import { Box } from '@mui/system';
// import { Color } from './theme';
export const MyContainer = styled(Box)(()=>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '100vw'
}))
export const MyHeader = styled(Typography)(()=>({
    fontSize:'40px'
}))
export const BodyContainer = styled(Grid)(() => ({
    width: '85vw',
    height: '90vh',
    marginTop:'20px',
    display: 'center ',
    alignItems: 'center',
    justifyContent: 'center',
}))