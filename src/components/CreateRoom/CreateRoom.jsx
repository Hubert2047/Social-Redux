import React from 'react'
import clsx from 'clsx'
import { RiVideoAddFill } from "react-icons/ri";
import {user} from '../../data/api.js'
import styles from './CreateRoom.module.scss'
import UserState from '../User/UserState';
export default function CreateRoom({className}) {
  return (
    <div className={clsx(styles.createRoom,className)}>
            <button className={clsx(styles.btn,'btn')}>
                <RiVideoAddFill className={styles.btnIcon}/>
                <p className={styles.btnText}>Creat Room</p>
            </button>
            <ul className={styles.listUser}>
                {user.friends?.map(friend =>{
                    return <UserState friend={friend}key={friend.userId} 
                                       userAvatar={friend.avatar}
                                       isOnline={friend.isOnline}
                        />
                })}
            </ul>
    </div>
  )
}
