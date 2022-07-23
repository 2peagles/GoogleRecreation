import { createTheme } from "@mui/material/styles";

export const Color = {
    primary:'#3C4043', //text
    secondary:'#9E3D80', //oatmeal
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
},
})
export default theme;