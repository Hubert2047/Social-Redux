import clsx from 'clsx'
import React from 'react'
import styles from './MusicCard.module.scss'

export default function MusicCard() {
    return (
        <div className={clsx(styles.musicCard, 'd-flex-r')}>
            <img
                src='./assets/person/1.jpeg'
                alt='anh'
                className={styles.songPoster}
            />

            <div className={clsx(styles.content, 'd-flex-c')}>
                <p className={styles.songName}>
                    Nothing's is gonna change my love to you
                </p>
                <p className={styles.singerName}>hubert</p>
            </div>
        </div>
    )
}
