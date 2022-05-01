import clsx from 'clsx'
import React from 'react'
import { BiMessageError } from 'react-icons/bi'
import { IoIosMoon } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import { MdLiveHelp, MdSettings } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { userActions } from '../../components/Store/user-slice'
import styles from './UserSettingList.module.scss'
export default function UserSettingList() {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(userActions.setCurrentUser({}))
    }
    return (
        <ul className={clsx(styles.settingList, 'd-flex-c')}>
            <li className={clsx(styles.settingItem, 'd-flex-r')}>
                <BiMessageError className={styles.settingIcon} />
                <span className={styles.settingName}>Give Feedback</span>
            </li>
            <li className={clsx(styles.settingItem, 'd-flex-r')}>
                <MdSettings className={styles.settingIcon} />
                <span className={styles.settingName}>Setting & Privacy</span>
            </li>
            <li className={clsx(styles.settingItem, 'd-flex-r')}>
                <IoIosMoon className={styles.settingIcon} />
                <span className={styles.settingName}>Display Mode</span>
            </li>
            <li className={clsx(styles.settingItem, 'd-flex-r')}>
                <MdLiveHelp className={styles.settingIcon} />
                <span className={styles.settingName}>Help & Support</span>
            </li>
            <li
                onClick={handleLogOut}
                className={clsx(styles.settingItem, 'd-flex-r')}>
                <IoLogOut className={styles.settingIcon} />
                <span className={styles.settingName}>Log Out</span>
            </li>
        </ul>
    )
}
