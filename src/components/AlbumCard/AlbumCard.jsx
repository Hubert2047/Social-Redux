import React from 'react'
import clsx from 'clsx'
import { RiPlayMiniFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import styles from './AlbumCard.module.scss'
export default function AlbumCard({ album }) {
    const navigate = useNavigate()
    return (
        <Link to={`${album.id}`} className={styles.albumCard}>
            <div className={styles.content}>
                <img src={album.poster} alt='' className={styles.img} />
                <div className={clsx(styles.btn)}>
                    <RiPlayMiniFill className={styles.btnIcon} />
                </div>
            </div>
            <h3 className={styles.title}>{album.title}</h3>
        </Link>
    )
}
