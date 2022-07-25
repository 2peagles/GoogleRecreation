import React from 'react';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      
          <Container
            disableGutters
          >
        <Navbar />
            <Home/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
