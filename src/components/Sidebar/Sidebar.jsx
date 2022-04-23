import styles from './Sidebar.module.scss'
import clsx from 'clsx'
import SidebarBtn from '../Button/SidebarBtn';
import {user} from '../../data/api.js'
import ShortCut from '../ShortCut/ShortCutCard';
import SidebarItem from'./SidebarItem/SideBarItem'
import {sidebarHomeItems} from '../../data/api.js'
export default function Sidebar({className,header,sidebarItems}) {
  return (
    <div className={clsx(styles.sidebar,className)}>
          <div className={styles.header}>
             {header}
          </div>
     
          <ul className={styles.tool} >
              {sidebarHomeItems.map(sidebarItem =>{
                return <SidebarItem key={sidebarItem.id} sidebarItem={sidebarItem}/>
              })}
          </ul>
          <SidebarBtn />
          <div className={styles.shortcut}>
            <h3>Your shortcut</h3>
            <div className={styles.shortcutList}>
                {user.shortCuts?.map(shortcut=>{
                  return <ShortCut key={shortcut.id} 
                                   avatar={shortcut.avatar} 
                                   name={shortcut.name}/>
                })}
            </div>
          </div>
    </div>
  )
}
