import React from 'react'
import { Grid } from '@mui/system'
import Product from './Product/Product.jsx'

const products = [
    { id: 1, name: 'Sneakers', description: 'Simple low-top with clean lines.', price: 'RM10'},
    { id: 2, name: 'Ankle Boots', description: 'Chunky heel with a sleek leather finish.', price: 'RM10'},
    { id: 3, name: 'Sandals', description: 'Thin leather straps & a small block heel.', price: 'RM10'},
    { id: 4, name: 'Loafers', description: 'Soft suede with a gold buckle accent.', price: 'RM10'},
    { id: 5, name: 'Ballet Flats', description: 'Slip-on shoes with a rounded toe, no heel.', price: 'RM10'},
    { id: 6, name: 'Flip-Flops', description: 'Casual sandals with a Y-shaped strap.', price: 'RM10'},
    
]

const Products = () => {
  return (
    <main>
        <Grid container justify ="center" spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Product product={product}/>
            </Grid>
          ))}
        </Grid>
    </main>
  )
}

export default Products