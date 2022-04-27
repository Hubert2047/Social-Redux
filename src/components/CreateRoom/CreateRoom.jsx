import clsx from 'clsx';
import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { user } from '../../data/api.js';
import UserState from '../User/UserState';
import styles from './CreateRoom.module.scss';
export default function CreateRoom({ className }) {
    return (
        <div className={clsx(styles.createRoom, className)}>
            <button className={clsx(styles.btn, 'btn')}>
                <RiVideoAddFill className={styles.btnIcon} />
                <p className={styles.btnText}>Creat Room</p>
            </button>
            <ul className={styles.listUser}>
                {user.friends?.map((friend) => {
                    return (
                        <UserState
                            friend={friend}
                            key={friend.userId}
                            userAvatar={friend.avatar}
                            isOnline={friend.isOnline}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
