import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User/User'
import styles from './MusicPlayList.module.scss'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import MusicList from '../MusicList/MusicList'
export default function MusicPlayList() {
    let params = useParams()
    let currentPlaylistId = parseInt(params.playlistId)
    const playlists = useSelector((state) => state.media.playlists)
    const currentPlaylist = playlists.find((list) => {
        return list.id === currentPlaylistId
    })
    const currentUser = useSelector((state) => state.user.currentUser)
    return (
        <div className={clsx(styles.musicPlaylist, 'd-flex-c')}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <div className={styles.img}>
                    <img
                        src={currentPlaylist.poster}
                        alt=''
                        className={styles.photo}
                    />
                </div>
                <div className={clsx(styles.headerContent, 'd-flex-c')}>
                    <p className={styles.headerTitle}>
                        {currentPlaylist.listName}
                    </p>
                    <div className={clsx(styles.information, 'd-flex-r')}>
                        <User
                            userAvatar={currentUser.avatar}
                            firstName={currentUser.firstName}
                            lastName={currentUser.lastName}
                            className={styles.user}
                        />
                        <span>
                            {' '}
                            {`。 ${currentPlaylist.songs.length} ${
                                currentPlaylist.songs.length < 2
                                    ? 'song'
                                    : 'songs'
                            }`}
                        </span>
                    </div>
                </div>
            </div>

            <MusicList musicList={currentPlaylist.songs} />
        </div>
    )
}
