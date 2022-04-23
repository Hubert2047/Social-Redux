import {React,useState} from 'react'
import clsx from'clsx'
import { AiOutlineCloseCircle } from "react-icons/ai";
import ShareType from '../../ShareType/ShareType';
import UserAvatar from '../../User/UserAvatar';
import UserName from '../../User/UserName';
import { MdColorLens } from "react-icons/md";
import { BsEmojiSmile,BsFillFileEarmarkImageFill } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { GoSmiley    } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { GiMicrophone } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import styles from './CreatePost.module.scss'
import {user} from '../../../data/api.js'

export default function CreatePost({hideCreatePost}) {
    const [text,setText]=useState('')
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <div className={clsx(styles.createPost,'d-flex-c')} onClick={(e)=>{ e.stopPropagation()}}>
        <div className={clsx(styles.header,'d-flex-r')}>
            <div className={styles.title}>Create post</div>
            <div className={styles.closeBtn} onClick={()=>{
                hideCreatePost()}}>
                <AiOutlineCloseCircle className={styles.icon}/>
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.bodyTop}>
                    <UserAvatar userAvatar={user.avatar} />
                    <div className={styles.bodyTopBox}>
                        <UserName firstName={user.firstName} lastName={user.lastName}/>
                        <ShareType/>
                    </div>
            </div>
            <div className={styles.main}>
                    <textarea onChange={handleOnChange} className={styles.content} value={text} placeholder={`What's on your mind, ${user.lastName}?`} ></textarea>
                    <div className={styles.optionBtns}>
                        <MdColorLens className={styles.optionBtnStyle1}/>
                        <BsEmojiSmile className={styles.optionBtnStyle2}/>
                    </div>
            </div>
            <div className={styles.bodyBottom}>
                    <div className={styles.actionBtn}>    
                        <button className={styles.addFeature}>Add to your post</button> 
                        <div className={'d-flex-r'}>
                                <BsFillFileEarmarkImageFill className={clsx(styles.icon,styles.iconStyle1)}/>
                                <FaUserTag className={clsx(styles.icon,styles.iconStyle2)}/>
                                <GoSmiley className={clsx(styles.icon,styles.iconStyle3)}/>
                                <ImLocation className={clsx(styles.icon,styles.iconStyle4)}/>
                                <GiMicrophone className={clsx(styles.icon,styles.iconStyle5)}/>
                                <BiDotsHorizontalRounded className={clsx(styles.icon,styles.iconStyle6)}/>
                        </div>
                    </div>
                    <button type='button' disabled={text.length===0} className={styles.submitBtn}>Post</button>
            </div>
        </div>
    </div>
  )
}
