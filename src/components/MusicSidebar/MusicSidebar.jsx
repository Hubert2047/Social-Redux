import clsx from 'clsx'
import React from 'react'
import { IoIosHeart } from 'react-icons/io'
import { MdQueueMusic } from 'react-icons/md'
import { SiAudiomack } from 'react-icons/si'
import { VscDiffAdded } from 'react-icons/vsc'
import PlaylistNavBtn from '../../components/PlaylistNavBtn/PlaylistNavBtn'
import styles from './MusicSidebar.module.scss'
import { Link } from 'react-router-dom'
const playlistNavBtns = [
    { id: 1, name: 'chinese' },
    { id: 2, name: 'english' },
]
export default function MusicSidebar() {
    return (
        <div className={styles.musicSidebar}>
            <Link to={`/media`}>
                <MdQueueMusic className={styles.homeIcon} />
            </Link>
            <div className={styles.optionBox}>
                <div className={clsx(styles.createPlaylist, 'd-flex-r')}>
                    <VscDiffAdded className={styles.createPlaylistIcon} />
                    <span className={styles.optionTitle}>Create PlayList </span>
                </div>
                <div className={clsx(styles.likeSongs, 'd-flex-r')}>
                    <IoIosHeart className={styles.likedIcon} />
                    <span className={styles.optionTitle}>Liked Songs</span>
                </div>
            </div>
            <div className={clsx(styles.albumBox, 'd-flex-r')}>
                <SiAudiomack className={styles.albumIcon} />
                <h4 className={styles.albumTitle}>Album</h4>
            </div>
            <ul className={clsx(styles.albumList, 'd-flex-c')}>
                {playlistNavBtns.map((btn) => {
                    return <PlaylistNavBtn key={btn.id} btn={btn} />
                })}
            </ul>
        </div>
    )
}
