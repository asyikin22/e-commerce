import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ({product}) => {
  const { title, description, thumbnail, image, variants, price } = product;
  const productImage = image || thumbnail || (images?.length > 0 && images[0].url);
  const productPrice = price || (variants && variants.length > 0 ? variants[0].prices[0].amount / 100 :0);

  return (
    <Card sx={{ minHeight: '300px', width: '300px', display: 'flex', flexDirection: 'column', mb: 1.5}}>
        <CardMedia
            component='img'
            height='140'
            image={productImage}
            alt={title}
            sx={{ objectFit: 'contain', width: '100%', mt: 2}}
        />

        <CardContent>
            <Typography variant='h5' component='div' sx={{ mb: 2}}>
                {title}
            </Typography>

            <Typography variant='body2' sx={{ color: 'grey', overflow: 'hidden', textOverFlow: 'ellipsis', whiteSpace: 'nowrap'}}>
                {description}
            </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='h5' color='primary.main'>
                ${productPrice}
            </Typography>
            
            <IconButton aria-label='Add to cart' sx={{ fontSize: '2rem' }}>
                <AddShoppingCartIcon fontSize='inherit'/>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product