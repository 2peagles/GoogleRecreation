import React from 'react';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home/Index';
import Footer from './components/Footer';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      
          <Container
            disableGutters
          >
        <Navbar />
            <Home />
            <Footer />
        </Container>
    </ThemeProvider>
  );
}

export default App;
