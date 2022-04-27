import clsx from 'clsx'
import React from 'react'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import User from '../../components/User/User'
import { sidebarHomeItems, user } from '../../data/api.js'
import styles from './Home.module.scss'
export default function Home() {
    return (
        <div className={styles.home}>
            <div className={clsx(styles.main, 'd-flex-r')}>
                <Sidebar
                    sidebarItems={sidebarHomeItems}
                    className={styles.sidebar}
                    header={
                        <User
                            userAvatar={user.avatar}
                            firstName={user.firstName}
                            lastName={user.lastName}
                        />
                    }
                />
                <Feed className={styles.feed} />
                <Rightbar className={styles.rightbar} />
            </div>
        </div>
    )
}
