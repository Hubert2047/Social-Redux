import { React } from 'react'
import styles from './Modal.module.scss'
export default function Modal({ children, handleHideModal }) {
    return (
        <div className={styles.modal} onClick={handleHideModal}>
            {children}
        </div>
    )
}
