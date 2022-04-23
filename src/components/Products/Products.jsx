import React from 'react'
import { categoryProducts } from '../../data/api';
import ProductCategory from '../ProductCategory/ProductCategory'
export default function Products() {
  return (
    <div>
        {categoryProducts?.map(categoryProduct =>{
            return <ProductCategory categorykey={categoryProduct.id} 
                                    categoryProduct={categoryProduct} 
                                    />
        })}
    </div>
  )
}
