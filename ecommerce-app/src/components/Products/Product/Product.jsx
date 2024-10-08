import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ( {product}) => {
    //Get the price from the first variant in medusa
    const price = product.variants?.[0]?.prices?.[0]?.amount
    const formattedPrice = price ? `$${(price/100).toFixed(2)}` : "N/A"

  return (
    <Card sx={{ minHeight: '300px', width: '300px', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
            component='img'
            height='140'
            image={product.thumbnail || (product.images?.length > 0 ? product.images[0]?.url : '/default-image-jpg')}
            alt={product.title}
            sx={{ objectFit: 'contain', width: '100%', mt: 3}}
        />

        <CardContent>
            <Typography variant='h5' component='div' sx={{ mb: 2}}>
                {product.title}
            </Typography>

            <Typography variant='body2' sx={{ color: 'grey' }}>
                {product.description}
            </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='h5' color='primary.main'>
                {formattedPrice}
            </Typography>
            
            <IconButton aria-label='Add to cart' sx={{ fontSize: '2rem' }}>
                <AddShoppingCartIcon fontSize='inherit'/>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product