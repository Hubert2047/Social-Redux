import clsx from 'clsx'
import { React } from 'react'
import { Outlet } from 'react-router-dom'
import MediaFooter from '../../components/MediaFooter/MediaFooter'
import MusicRigtbar from '../../components/MusicRightbar/MusicRigtbar'
import MusicSidebar from '../../components/MusicSidebar/MusicSidebar'
import styles from './Media.module.scss'

export default function Media() {
    return (
        <div className={clsx(styles.media, 'd-flex-c')}>
            <div className={clsx(styles.content)}>
                <MusicSidebar />
                <Outlet />
                <MusicRigtbar />
            </div>
            <MediaFooter />
        </div>
    )
}
