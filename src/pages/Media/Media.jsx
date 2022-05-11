import clsx from 'clsx'
// import { useDispatch, useSelector } from 'react-redux'
import { collection, onSnapshot } from 'firebase/firestore'
import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import MediaFooter from '../../components/MediaFooter/MediaFooter'
import MusicRigtbar from '../../components/MusicRightbar/MusicRigtbar'
import MusicSidebar from '../../components/MusicSidebar/MusicSidebar'
import { mediaActions } from '../../components/Store/media-slice'
import { db } from '../../firebase'
import styles from './Media.module.scss'
export default function Media() {
    const currentSongIndex = useSelector(
        (state) => state.media.currentSongIndex
    )
    const collectionRef = collection(db, 'musics')
    const dispatch = useDispatch()
    useEffect(() => {
        onSnapshot(
            collectionRef,
            (data) => {
                let index = -1
                dispatch(
                    mediaActions.setMusics(
                        data.docs.map((doc) => {
                            index++
                            return { id: doc.id, index: index, ...doc.data() }
                        })
                    )
                )
            },
            (err) => {
                alert(err)
            }
        )
    }, [])
    return (
        <div className={clsx(styles.media, 'd-flex-c')}>
            <div className={clsx(styles.content)}>
                <MusicSidebar />
                <Outlet />
                <MusicRigtbar />
            </div>
            {currentSongIndex && <MediaFooter />}
        </div>
    )
}
