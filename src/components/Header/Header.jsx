import clsx from 'clsx'
import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { navBtns } from '../../data/api'
import { user } from '../../data/api.js'
import NavigationButton from '../Nav/NavigationButton'
import SearchPrimary from '../Search/SearchPrimary'
import { headerActions } from '../Store/header-slice'
import User from '../User/User'
import UserSettingList from '../UserSettingList/UserSettingList'
import styles from './Header.module.scss'
export default function Header() {
    const isOpenSetting = useSelector((state) => state.header.isOpenSetting)
    const dispatch = useDispatch()
    const handleOpenSetting = () => {
        dispatch(headerActions.setOpenSetting())
    }
    const mesengerCount = user.mesengers.filter(
        (mesenger) => mesenger.isRead === false
    ).length
    const requestCount = user.requests.length
    const notificationCount = user.notifications.length
    return (
        <div className={styles.header}>
            {/* logo */}
            <div className={styles.logo}>Hlook</div>
            {/* heaader search */}
            <SearchPrimary placeholder={'Search Hlook'} />
            {/* header nav */}
            <ul className={styles.nav}>
                {navBtns.map((navBtn) => {
                    return <NavigationButton key={navBtn.id} navBtn={navBtn} />
                })}
            </ul>
            {/* header icon */}
            <ul className={styles.icons}>
                <li className={styles.iconBox} name='Request'>
                    <BsFillPeopleFill className={styles.icon} />
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
                    userAvatar={user.avatar}
                    firstName={user.firstName}
                    lastName={user.lastName}
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
