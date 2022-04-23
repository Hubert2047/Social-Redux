import React from 'react'
import clsx from 'clsx'
import styles from './SidebarItem.module.scss'
export default function SideBarItem({sidebarItem}) {
  return (
    <li className={clsx(styles.sidebarItem,'d-flex-r')}>
                {sidebarItem.icon}
                <span className={styles.text}>{sidebarItem.name}</span>
    </li>
  )
}
