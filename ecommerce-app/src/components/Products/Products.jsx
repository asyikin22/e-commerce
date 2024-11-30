import React, { useState, useEffect }from 'react'
import { Grid } from '@mui/system'
import Product from './Product/Product.jsx'
import { Typography } from '@mui/material'
// import { useProducts } from 'medusa-react'

const Products = () => {
  // State for products (starting with mock products)
  const [products, setProducts] = useState([
    { id: 1, title: 'Sneakers', description: 'Simple low-top with clean lines.', price: '50', image:'/images/sneakers.jpg'},
    { id: 2, title: 'Ankle Boots', description: 'Chunky heel with a sleek leather finish.', price: '80', image:'/images/boots.jpg'},
    { id: 3, title: 'Sandals', description: 'Thin leather straps & a small block heel.', price: '35', image:'/images/sandals.jpg'},
    { id: 4, title: 'Loafers', description: 'Soft suede with a gold buckle accent.', price: '55', image:'/images/loafers.jpg'},
    { id: 5, title: 'Ballet Flats', description: 'Slip-on shoes with a rounded toe, no heel.', price: '20', image:'/images/ballet.jpg'},
    { id: 6, title: 'Flip-Flops', description: 'Casual sandals with a Y-shaped strap.', price: '10', image:'/images/flipflops.jpg'},
  ]);

  //loading state for when when fetching real products from Medusa
  const [loading, setLoading] = useState(true);

  //fetch real products from Medusa
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:9000/store/products');
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);                     //check structure of response        
        
        //add real products fetched from Medusa to the state + merge with mock products
        setProducts((prevProducts) => {
          const existingIds = new Set(prevProducts.map((product) => product.id));
          const newProducts = data.products.filter(
            (product) => !existingIds.has(product.id)
          );
          return [...prevProducts, ...newProducts];
        });
      } catch (error) {
        console.error('Error fetching Medusa products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return ( 
    <main>
        <Typography variant='h3' align="center" gutterBottom>
          Our Latest Collection
        </Typography>

        {loading ? (
          <Typography align="center">Loading Products...</Typography>
        ) : (
        <Grid container justifyContent ="center" spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Product product={product}/>
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  )
}

export default Products