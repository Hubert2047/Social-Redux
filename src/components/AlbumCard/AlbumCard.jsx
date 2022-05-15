import React from 'react'
import clsx from 'clsx'
import { RiPlayMiniFill } from 'react-icons/ri'
import styles from './AlbumCard.module.scss'
export default function AlbumCard({ albumCard }) {
    return (
        <div className={styles.albumCard}>
            <div className={styles.content}>
                <img src='./assets/post/1.jpeg' alt='' className={styles.img} />
                <div className={styles.btn}>
                    <RiPlayMiniFill className={clsx(styles.btnIcon)} />
                </div>
            </div>
            <h3 className={styles.title}>chinsese</h3>
        </div>
    )
}
