import clsx from 'clsx'
import { user } from '../../data/api'
import { sidebarHomeItems } from '../../data/api.js'
import SidebarBtn from '../Button/SidebarBtn'
import ShortCut from '../ShortCut/ShortCutCard'
import styles from './Sidebar.module.scss'
import SidebarItem from './SidebarItem/SideBarItem'
export default function Sidebar({ className, header, sidebarItems }) {
    return (
        <div className={clsx(styles.sidebar, className)}>
            <div className={styles.header}>{header}</div>

            <ul className={styles.tool}>
                {sidebarHomeItems.map((sidebarItem) => {
                    return (
                        <SidebarItem
                            key={sidebarItem.id}
                            sidebarItem={sidebarItem}
                        />
                    )
                })}
            </ul>
            <SidebarBtn />
            <div className={styles.shortcut}>
                <h3>Your shortcut</h3>
                <div className={styles.shortcutList}>
                    {user.shortCuts?.map((shortcut) => {
                        return (
                            <ShortCut
                                key={shortcut.id}
                                avatar={shortcut.avatar}
                                name={shortcut.name}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
