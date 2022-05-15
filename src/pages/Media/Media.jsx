import { async } from '@firebase/util'
import clsx from 'clsx'
import { collection, doc, getDoc } from 'firebase/firestore'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import MediaFooter from '../../components/MediaFooter/MediaFooter'
import MusicRigtbar from '../../components/MusicRightbar/MusicRigtbar'
import MusicSidebar from '../../components/MusicSidebar/MusicSidebar'
import { db } from '../../firebase'
import styles from './Media.module.scss'

export default function Media() {
    const currentSong = useSelector((state) => state.media.currentSong)
    const dispatch = useDispatch()
    useEffect(() => {
        async function getData() {
            const docRef = doc(db, 'currentSong', 'OV9HeNw9HF2uDKyzuMla')
            const docSnap = await getDoc(docRef)
        }
        getData()
    }, [])
    return (
        <div className={clsx(styles.media, 'd-flex-c')}>
            <div className={clsx(styles.content)}>
                <MusicSidebar />
                <Outlet />
                <MusicRigtbar />
            </div>
            {currentSong && <MediaFooter />}
        </div>
    )
}
