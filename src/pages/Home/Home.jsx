import React from 'react'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from  './Home.module.scss'
import clsx from'clsx';
import Rightbar from '../../components/Rightbar/Rightbar';
import {user} from '../../data/api.js'
import User from '../../components/User/User'
import {sidebarHomeItems} from '../../data/api.js'
export default function Home() {
  return (
    <div  className={styles.home}>
        <div className={clsx(styles.main,'d-flex-r')}>
            <Sidebar sidebarItems={sidebarHomeItems} 
                     className={styles.sidebar}
                     header={ <User userAvatar={user.avatar} firstName={user.firstName} lastName={user.lastName}/>}
                     />
            <Feed className={styles.feed}/>
            <Rightbar className={styles.rightbar}/>
        </div>
    </div>
  )
}
