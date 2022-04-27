import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import User from '../../components/User/User'
import { sidebarHomeItems } from '../../data/api.js'
import styles from './Home.module.scss'
export default function Home() {
    const currentUser = useSelector((state) => state.user.currentUser)
    return (
        <div className={styles.home}>
            <div className={clsx(styles.main, 'd-flex-r')}>
                <Sidebar
                    sidebarItems={sidebarHomeItems}
                    className={styles.sidebar}
                    header={
                        <User
                            userAvatar={currentUser.avatar}
                            firstName={currentUser.firstName}
                            lastName={currentUser.lastName}
                        />
                    }
                />
                <Feed className={styles.feed} />
                <Rightbar className={styles.rightbar} />
            </div>
        </div>
    )
}
