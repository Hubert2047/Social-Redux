import { React } from 'react'
import styles from './Modal.module.scss'
export default function Modal({ children, handleShowModal }) {
    return (
        <div className={styles.modal} onClick={handleShowModal}>
            {children}
        </div>
    )
}
