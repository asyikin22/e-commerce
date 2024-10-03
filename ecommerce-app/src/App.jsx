import React from 'react'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import { Container } from '@mui/system'

const App = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 10}}/>
      <Products />

    </div>
  )
}

export default App