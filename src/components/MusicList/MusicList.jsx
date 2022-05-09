import React from 'react'
import styles from './MusicList.module.scss'
import MusicCard from '../MusicCard/MusicCard'
export default function MusicList({ musicList }) {
    let order = 0
    return (
        <ul className={styles.musicList}>
            {musicList?.map((song) => {
                order++
                return <MusicCard order={order} key={song.id} song={song} />
            })}
        </ul>
    )
}
