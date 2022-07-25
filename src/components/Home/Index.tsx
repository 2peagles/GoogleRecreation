import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HomeMobile } from './HomeMobile';
import { HomeDesktop } from './HomeDesktop';

export default function Home () {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
        {matches ? <HomeMobile/> : <HomeDesktop />}
    </>
  )
}