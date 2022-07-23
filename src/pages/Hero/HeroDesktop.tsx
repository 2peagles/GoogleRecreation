import React from 'react';
import { Box } from '@mui/system';
import { Grid, Button } from '@mui/material';
import { Color } from '../../styles/theme';

export const HeroDesktop = () => {
  return (
    <Grid container spacing={2} sx={{backgroundColor:Color.green, marginTop:'10px', padding:'0px 60px',  height:'70vh'}}>
        <Grid item xs={6}>
             <Box>
                <p>For all you are</p>
                    <h1>Pixel 6a is joining the family</h1>
                        <p>Pre-order Pixel 6a and get Pixel Buds-A-series for free. Plus, get up to $300 back with eligible phone trade-in.</p>
                     <Button variant='outlined'>Learn more</Button>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box>
                 <img src='/Images/hero.png' alt='Pixel 6a with pixel 5a buds' height='400px' />
            </Box>
        </Grid>
    </Grid>
  )
}
