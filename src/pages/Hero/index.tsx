import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HeroMobile } from './HeroMobile';
import { HeroDesktop } from './HeroDesktop';

export const Hero = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
        {matches ? <HeroMobile/> : <HeroDesktop />}
    </>
  )
}
