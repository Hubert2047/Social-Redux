import {React,useState} from 'react'
import UserAvatar from '../User/UserAvatar'
import styles from './Share.module.scss'
import { TiVideo } from "react-icons/ti";
import { BsFillImageFill ,   BsFillEmojiSmileFill} from "react-icons/bs";
import {user} from '../../data/api.js'
import Modal from '../Modal/Modal';
import CreatePost from '../Popup/CreatePost/CreatePost';
import clsx from 'clsx';
export default function Share() {
  const [isShow,setIsShow] = useState(false)
  const handleOnclick =() => {
    setIsShow(pre=>!pre)
  }
  return (
    <div className={styles.share}>
        <div className={clsx(styles.top,'d-flex-r')}>
            <UserAvatar userAvatar={user.avatar}/>
            <input type="text" 
                  className={styles.input} 
                  placeholder ={`What's on your mind ${user.lastName} ?`}
                  onClick ={handleOnclick}
                  />
        </div>
        <div className={clsx('hr')}/>
        <ul className={clsx(styles.optionBtns,'d-flex-r')}>
            <li className={clsx(styles.optionBtn,'d-flex-r')}>
                <TiVideo className={styles.optionBtnStyle1}/>
                <span>Live Video</span>
            </li>
         
             <li className={clsx(styles.optionBtn,'d-flex-r')}>
                <BsFillImageFill className={styles.optionBtnStyle2}/>
                <span>Photo/Video</span>
            </li>

              <li className={clsx(styles.optionBtn,'d-flex-r')}>
                <   BsFillEmojiSmileFill className={styles.optionBtnStyle3}/>
                <span>Feeling/activity</span>
            </li>
        </ul>
      { isShow && <Modal hideModal={handleOnclick} popup={<CreatePost hideCreatePost={handleOnclick}/>}/>}
    </div>
  )
}
