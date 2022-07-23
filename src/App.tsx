import React from 'react';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import { Hero } from './pages/Hero';
import { Popular  } from './pages/Popular/Index';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container
            disableGutters
            maxWidth='xl'>
          <Navbar />
         <Hero />
         <Popular/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
