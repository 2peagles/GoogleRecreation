import React from 'react';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container 
            disableGutters
            maxWidth='xl'>
          <Navbar />
        </Container>
    </ThemeProvider>
  );
}

export default App;
