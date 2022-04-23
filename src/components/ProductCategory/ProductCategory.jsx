import React from 'react'
import styles from  './ProductCategory.module.scss'
import { MdLocationOn } from "react-icons/md";
import Product from '../Product/Product';
import clsx from 'clsx';

export default function ProductCategory({categoryProduct}) {
  return (
    <div className={clsx(styles.productCategory,'d-flex-c')}>
        <div className={clsx(styles.header, 'd-flex-r')}>
            <h2 className={styles.title}>{categoryProduct.title}</h2>
            <div className={clsx(styles.address, 'd-flex-r')}>
              <MdLocationOn/>
              <a href="#">{categoryProduct.address}</a>
            </div>
        </div>
        <div className={styles.listProduct}>
            {categoryProduct.products?.map(product =>{
                return <Product key={product.id} product={product}/>
            })}
        </div>
    </div>
  )
}
