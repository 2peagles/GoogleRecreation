import React from 'react';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import { Color } from '../../styles/theme';

export const HeroMobile = () => {
  return (
    <Grid container spacing={2} 
        sx={{
            backgroundColor:Color.green, 
            padding:'0px 70px', 
            height:'85vh',
            width:'100%',
            display:'flex', 
            textAlign:'center',
            alignItems:'center', 
            justifyContent:'center'}}>
    <Grid item xs={12} sx={{ color:Color.primary,}}>
         <Box>
            <p>For all you are</p>
                <h1>Pixel 6a is joining the family</h1>
                     <p>Pre-order Pixel 6a and get Pixel Buds-A-series for free. Plus, get up to $300 back with eligible phone trade-in.</p>
                 <Button variant='outlined'>Learn more</Button>
        </Box>
    </Grid>
    <Grid item xs={12}>
        <Box>
              <img src='/Images/hero.png' alt='Pixel 6a with pixel 5a buds' height='300px' />
          </Box>
    </Grid>
</Grid>
  )
}
