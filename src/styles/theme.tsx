import { createTheme } from "@mui/system"

export const Color = {
    primary:'3C4043', //text
    secondary:'#9E3D8', //oatmeal
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
        }
    }
})
export default theme;