import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, Box } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart'

import logo from '../../assets/shop.png'

const Navbar = () => {
  return (
    <>
        <AppBar position='fixed'color='inherit'>

            <Toolbar>
                <Typography variant='h6' color='inherit' style={{ display: 'flex', alignItems: 'center'}}>
                    <img src={logo} alt="Shoe Shop" height='55px' style={{ marginRight: '20px' }}/>
                    Asyikin's Shoe Shop
                </Typography>

                <Box sx = {{ flexGrow: 1}}/>

                <IconButton aria-label='show cart items'color='inherit' sx={{ fontSize: '2rem'}}>
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCart fontSize='inherit'/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    
    </>
  )
}

export default Navbar