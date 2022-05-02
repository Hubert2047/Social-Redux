import clsx from 'clsx'
import React from 'react'
import { BiDotsHorizontalRounded, BiSearch, BiVideoPlus } from 'react-icons/bi'
import { user } from '../../data/api'
import '../../data/api.js'
import UserFriend from '../User/UserFriend'
import styles from './Rightbar.module.scss'
export default function Rightbar({ className }) {
    return (
        <div className={clsx(styles.rightbar, className)}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <h3 className={styles.title}>Contacts</h3>
                <div className={clsx(styles.headerIcons, 'd-flex-r')}>
                    <div className={styles.optionBtn}>
                        <BiVideoPlus className={styles.optionIcon} />
                    </div>
                    <div className={styles.optionBtn}>
                        <BiSearch className={styles.optionIcon} />
                    </div>
                    <div className={styles.optionBtn}>
                        <BiDotsHorizontalRounded
                            className={styles.optionIcon}
                        />
                    </div>
                </div>
            </div>
            {/* <UserFriend friend= {user.friends[0]}/> */}
            {user.friends.map((friend) => {
                return <UserFriend key={friend.userId} friend={friend} />
            })}
        </div>
    )
}
