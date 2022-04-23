import {React,useRef }from 'react'
import styles from  './Modal.module.scss'
export default function Modal({popup,hideModal}) {
const modal =useRef()
const handleOnClick=(e) => {     
        hideModal()
  }
  return (
    <div ref={modal} className={styles.modal} onClick={handleOnClick}>
        {popup}
    </div>
  )
}
