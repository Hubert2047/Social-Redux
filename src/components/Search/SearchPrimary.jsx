import clsx from 'clsx';
import React from 'react'
import { FaSistrix } from "react-icons/fa";
import styles from  './SearchPrimary.module.scss'
export default function SearchPrimary({placeholder}) {
  return (
    <div className={clsx(styles.searchPrimary,'d-flex-r')}>
        <FaSistrix className={styles.icon}/>
        <input className={styles.input} type="text" placeholder={placeholder}/>
    </div>
  )
}
