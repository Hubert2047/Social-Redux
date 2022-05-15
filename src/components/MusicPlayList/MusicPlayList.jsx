import { React, useEffect } from 'react'
import User from '../User/User'
import styles from './MusicPlayList.module.scss'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import MusicList from '../MusicList/MusicList'
import { db } from '../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { mediaActions } from '../../components/Store/media-slice'

export default function MusicPlayList() {
    let params = useParams()
    const dispatch = useDispatch()
    let currentPlaylistId = params.playlistId
    const currentUser = useSelector((state) => state.user.currentUser)
    const currentPlaylist = useSelector((state) => state.media.currentPlaylist)
    const albums = useSelector((state) => state.media.albums)
    const currentAlbum = albums.find((album) => album.id === currentPlaylistId)
    const collectionRef = collection(db, `albums/${currentPlaylistId}/musics`)
    console.log(currentPlaylist)
    useEffect(() => {
        onSnapshot(
            collectionRef,
            (data) => {
                dispatch(
                    mediaActions.setCurrentPlayList(
                        data.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() }
                        })
                    )
                )
            },
            (err) => {
                alert(err)
            }
        )
    }, [])
    if (currentPlaylist.length < 1) {
        return <></>
    }
    return (
        <div className={clsx(styles.musicPlaylist, 'd-flex-c')}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <div className={styles.img}>
                    <img
                        src={currentAlbum.poster}
                        alt=''
                        className={styles.photo}
                    />
                </div>
                <div className={clsx(styles.headerContent, 'd-flex-c')}>
                    <p className={styles.headerTitle}>{currentAlbum.title}</p>
                    <div className={clsx(styles.information, 'd-flex-r')}>
                        <User
                            userAvatar={currentUser.avatar}
                            firstName={currentUser.firstName}
                            lastName={currentUser.lastName}
                            className={styles.user}
                        />
                        <span>
                            {' '}
                            {`。 ${currentPlaylist.length} ${
                                currentPlaylist.length < 2 ? 'song' : 'songs'
                            }`}
                        </span>
                    </div>
                </div>
            </div>

            <MusicList musicList={currentPlaylist} />
        </div>
    )
}
