import clsx from 'clsx'
import React from 'react'
import ReactDOM from 'react-dom'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { navBtns, user } from '../../data/api'
import NavigationButton from '../Nav/NavigationButton'
import SearchPrimary from '../Search/SearchPrimary'
import { headerActions } from '../Store/header-slice'
import User from '../User/User'
import UserSettingList from '../UserSettingList/UserSettingList'
import styles from './Header.module.scss'
export default function Header() {
    const isOpenSetting = useSelector((state) => state.header.isOpenSetting)
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    const handleOpenSetting = () => {
        dispatch(headerActions.setOpenSetting(true))
    }
    const mesengerCount = user.mesengers.filter(
        (mesenger) => mesenger.isRead === false
    ).length
    const requestCount = user.requests.length
    const notificationCount = user.notifications.length
    const icon = <BsFillPeopleFill className={styles.icon} />
    return (
        <div className={styles.header}>
            {/* logo */}
            <div className={styles.logo}>
                Like <sub>You</sub>{' '}
            </div>
            {/* heaader search */}
            <SearchPrimary placeholder={'Search '} />
            {/* header nav */}
            <ul className={styles.nav}>
                {navBtns.map((navBtn) => {
                    return <NavigationButton key={navBtn.id} navBtn={navBtn} />
                })}
            </ul>
            {/* header icon */}
            <ul className={styles.icons}>
                <li className={styles.iconBox} id='1' name='Request'>
                    {/* <BsFillPeopleFill className={styles.icon} /> */}
                    {icon}
                    <span className={styles.iconText}>{requestCount}</span>
                </li>
                <li className={styles.iconBox} name='Messenger'>
                    <RiMessengerFill className={styles.icon} />
                    <span className={styles.iconText}>{mesengerCount}</span>
                </li>

                <li className={styles.iconBox} name='Notifications'>
                    <FaBell className={styles.icon} />
                    <span className={styles.iconText}>{notificationCount}</span>
                </li>
            </ul>
            {/* user */}
            <div className={clsx(styles.userBox, 'd-flex-r')}>
                {/* user Infor */}
                <User
                    userAvatar={currentUser.avatar}
                    firstName={currentUser.firstName}
                    lastName={currentUser.lastName}
                    className={styles.user}
                />
                {/* user seetting */}
                <div
                    onClick={handleOpenSetting}
                    className={clsx(styles.setting, 'd-flex-r')}>
                    <MdOutlineArrowDropDown />
                    {isOpenSetting && <UserSettingList />}
                </div>
            </div>
        </div>
    )
}
