import React from 'react'
import UserName from '../../User/UserName';
import UserState from '../../User/UserState';
import { BsPeopleFill,BsHandbagFill } from "react-icons/bs";
import styles from './UserProfileCard.module.scss'
export default function UserProfileCard({friend}) {

  return (
    <div className={styles.userProfileCard}>
        <UserState userAvatar={friend.avatar} 
                      isOnline={friend.isOnline}
                      stateClassName={styles.userState}
                      avatarClassName={styles.userAvatar}
        />

        <div className={styles.content}>
            <UserName className={styles.userName} firstName={friend.firstName} lastName={friend.lastName}/>
            <div className={styles.userInfor}>
              <BsPeopleFill className={styles.inforIcon}/>
              <p className={styles.inforText}>41 mutual friends including Nguyễn Yến and La Thái Mẫn</p>
            </div>
            <div className={styles.userInfor}>
              <BsHandbagFill className={styles.inforIcon}/>
              <p className={styles.inforText}>Worked at FT Island Vietnamese Fanclub</p>
            </div>
        </div>
    </div>
  )
}
