import { createTheme } from "@mui/material/styles";

export const Color = {
    primary:'#3C4043', //text
    secondary:'#e9e3db', //oatmeal
    green:'#E3FFE6',
    light:'grey',
    white:'#fff',
    black:'#000'
}
const theme = createTheme({
    palette:{
        primary:{
            main: Color.primary
        },
        secondary:{
            main:Color.secondary
        },
    },
components:{
    MuiButtonBase:{
        defaultProps:{
            disableRipple:true,        
        },
    },
    MuiTypography:{
        defaultProps:{
            variantMapping:{
                h1:'h6', //40px
                subtitle1:'p', //16px
            },
        },
    },
}, 
 
})
export default theme;