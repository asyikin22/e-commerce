import React, { useState, useEffect }from 'react'
import { Grid } from '@mui/system'
import Product from './Product/Product.jsx'
import { useProducts } from 'medusa-react'

const Products = () => {
  const hardCodedProucts = [
    { id: 1, name: 'Sneakers', description: 'Simple low-top with clean lines.', price: '$50', image:'/images/sneakers.jpg'},
    { id: 2, name: 'Ankle Boots', description: 'Chunky heel with a sleek leather finish.', price: '$80', image:'/images/boots.jpg'},
    { id: 3, name: 'Sandals', description: 'Thin leather straps & a small block heel.', price: '$35', image:'/images/sandals.jpg'},
    { id: 4, name: 'Loafers', description: 'Soft suede with a gold buckle accent.', price: '$55', image:'/images/loafers.jpg'},
    { id: 5, name: 'Ballet Flats', description: 'Slip-on shoes with a rounded toe, no heel.', price: '$20', image:'/images/ballet.jpg'},
    { id: 6, name: 'Flip-Flops', description: 'Casual sandals with a Y-shaped strap.', price: '$10', image:'/images/flipflops.jpg'},
  ]

//fetch products from Medusa BE
const { products: medusaProducts, isLoading } = useProducts()

//combine hardcoded products with fetched medusa producst
const combinedProducts = [
  ...hardCodedProucts,
  ...medusaProducts?.map((product) => ({
    id: product.id,
    name: product.title,
    description: product.description, 
    price: `$${(product.variants[0]?.prices[0]?.amount / 100).toFixed(2)}`,
    image: product.thumbnail
  })) || []
]

if (isLoading) return <div>Loading...</div>

 return ( 
    <main>
        <Grid container justify ="center" spacing={4}>
          {combinedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Product product={product}/>
            </Grid>
          ))}
        </Grid>
    </main>
  )
}

export default Products