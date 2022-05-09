import React from 'react'
import clsx from 'clsx'
import styles from './SongCard.module.scss'
export default function SongCard({ song, textStyle }) {
    return (
        <div className={clsx(styles.songCard, 'd-flex-r')}>
            <img src={song.poster} alt='' className={styles.poster} />
            <div className={clsx(styles.titleContent, 'd-flex-c')}>
                <p style={textStyle} className={styles.songName}>
                    {song.songName}
                </p>
                <p style={textStyle} className={styles.singerName}>
                    {song.singerName}
                </p>
            </div>
        </div>
    )
}
