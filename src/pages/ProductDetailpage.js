import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/components/ProductDetail'

function ProductDetailpage() {
  return (
    <Navbar>
        <ProductDetail></ProductDetail>
    </Navbar>
  )
}

export default ProductDetailpage