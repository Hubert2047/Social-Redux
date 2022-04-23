import React from 'react'
import clsx from 'clsx'
import styles from './Product.module.scss'
export default function Product({product}) {
  return (
    <div className={clsx(styles.produc,'d-flex-c')}>
            <img src={product.img} className={styles.img}alt="product"></img>
            <p className={styles.price}>{`$NT ${product.price}`}</p>
            <div className={styles.name}>{product.name}</div>
            <p className={styles.address}>{product.address}</p>
    </div>
  )
}
