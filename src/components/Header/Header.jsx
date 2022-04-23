import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import styles from  './Header.module.scss'
import User from '../User/User';
import {user} from '../../data/api.js'
import NavigationButton from '../Nav/NavigationButton'
import {navBtns} from '../../data/api'
import SearchPrimary from '../Search/SearchPrimary';
export default function Header() {
    const[activeNavBtnId,setActiveNavBtnId]=useState(1)
    const handleNavigation=(id)=>{
        setActiveNavBtnId(id)     
    }
    const mesengerCount= user.mesengers.filter(mesenger=>mesenger.isRead===false).length
    const requestCount =user.requests.length
    const notificationCount =user.notifications.length
  return (
    <div className={styles.header}>
{/* logo */}
        <div className={styles.logo}>Hlook
        </div>
{/* heaader search */}
          <SearchPrimary placeholder={'Search Hlook'}/>
{/* header nav */}
        <ul className={styles.nav}>
             {navBtns.map(navBtn=>{
                 return <NavigationButton 
                        key={navBtn.id} 
                        navBtn={navBtn}
                        handleNavigation={handleNavigation}
                        activeNavBtnId={activeNavBtnId}
                        />
                                        
             })}          
        </ul>
{/* header icon */}
        <ul className={styles.icons}>
            <li className={styles.iconBox} name="Request">
                <BsFillPeopleFill  className={styles.icon}/>
                <span className={styles.iconText}>{requestCount}</span>
            </li>
                <li className={styles.iconBox} name='Messenger'>
                <RiMessengerFill className={styles.icon}/>
                <span className={styles.iconText}>{mesengerCount}</span>
            </li>

            <li className={styles.iconBox} name='Notifications'>
                <FaBell className={styles.icon}/>
                <span className={styles.iconText}>{notificationCount}</span>
            </li>         
        </ul>
{/* user */}
        <User userAvatar={user.avatar} 
              firstName={user.firstName} 
              lastName={user.lastName}
              className={styles.user}
        />
    </div>
  )
}
