import React from 'react'
import { useSelector } from 'react-redux'
import MusicList from '../MusicList/MusicList'
import styles from './MusicHome.module.scss'

export default function MusicHome() {
    const musicList = useSelector((state) => state.media.currentPlaylist)
    // console.log('musichome', musicList)
    return (
        <div className={styles.musicHome}>
            <div className={styles.slider}>
                <img
                    className={styles.img}
                    src='https://img.freepik.com/free-vector/riot-against-war-ukraine-people-holding-yellow-blue-ukrainian-flag-demonstration-stop-russian-aggression-young-woman-traditional-dress-man-protest-cartoon-vector-illustration_107791-10900.jpg?size=626&ext=jpg'
                    alt=''
                />
            </div>
            <h2 className={styles.playlistTitle}>Top Musics</h2>
            <MusicList musicList={musicList} />
        </div>
    )
}
