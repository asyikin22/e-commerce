import React from 'react'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import { Container, palette } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ShoeCustomizer from './components/ShoeCustomizer'

const darkTheme = createTheme ({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A1929',
      paper: '#102a43'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Container sx={{ mt: 10}}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem'}}>Customize Your Own Shoes!</h2>
          <div style={{ marginBottom : '20px'}}>
            <ShoeCustomizer />
          </div>
          <Products />
        </Container>
      </div>

    </ThemeProvider>
  )
}

export default App