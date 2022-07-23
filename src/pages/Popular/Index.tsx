import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PopularMobile } from './PopularMobile';
import { PopularDesktop } from './PopularDesktop';

export const Popular = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
        {matches ? <PopularMobile/> : <PopularDesktop />}
    </>
  )
}