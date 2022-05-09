import React from 'react'
import clsx from 'clsx'
import styles from './PlaylistNavBtn.module.scss'
import { GiMusicSpell } from 'react-icons/gi'
import { Link } from 'react-router-dom'
export default function PlaylistNavBtn({ btn }) {
    return (
        <Link
            to={`${btn.id}`}
            className={clsx(styles.playlistNavBtn, 'd-flex-r')}>
            <GiMusicSpell className={styles.btnIcon} />
            <h4 className={styles.btnName}>{btn.name}</h4>
        </Link>
    )
}
