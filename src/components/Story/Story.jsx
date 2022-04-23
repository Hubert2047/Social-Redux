import {React} from 'react'
import UserAvatar from '../User/UserAvatar'
import styles from './Story.module.scss'


export default function Story({img,avatar,lastName,firstName}) {
 
  return (
    <div className={styles.story}>
        <div className={styles.userBox}>
              <div className={styles.userName}>
                    <span className={styles.lastName}>{lastName}</span>
                    <span className={styles.firstName}>{firstName}</span>
              </div>       
        </div>
        <img src={img} alt="storyImage" className={styles.img}/>
        <UserAvatar userAvatar={avatar} className={styles.userAvatar}/>
    </div>
  )
}
