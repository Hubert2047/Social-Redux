import React,{useState,useContext} from 'react'
import clsx from 'clsx'
import UserPost from '../User/UserPost'
import styles from './Post.module.scss'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt ,FaRegShareSquare} from "react-icons/fa";
import Comments from '../Comments/Comments';
import { Context } from '../Context/Context';
export default function Post({post}) {
    const user =useContext(Context)
    const [isActiveCommentBox,setIsActiveCommentBox]=useState(false)
    const [likeCount,setLikeCount]=useState(post.likeCount)
    const [isLiked,setIsLiked] =useState(false)
    const handleActiveComment=()=>{
        setIsActiveCommentBox(prev=>{
            return !prev
        })
    }
    const handleLikeClick=()=>{
        if(isLiked){
            setLikeCount(prev=>prev-1)
            setIsLiked(prev=>!prev)
        }else{
            setLikeCount(pre=>pre+1)
            setIsLiked(prev=>!prev)
        }
    }
    const commentCount =user.posts.find(x=>x.id===post.id).comments?.length
  return (
    <div className={styles.post}>
        <div className={clsx(styles.header,'d-flex-r')}>
            <UserPost 
                    createAt={new Date(post.createAt).toLocaleString()} 
                    userAvatar={post.userCreate.avatar}
                    firstName={post.userCreate.firstName}
                    lastName={post.userCreate.lastName}
                    />
            <BiDotsHorizontalRounded className={styles.changeIcon}/>
        </div>
        <div >
            <div className={styles.content}>              
                {post.content}
            </div>
            <img src={post.img} alt="" className={styles.img} />
        </div>
        <div className={styles.footer}>
            <div className={clsx(styles.inforBox,'d-flex-r')}>
                <div className={clsx(styles.inforBoxRight,'d-flex-r')}>
                    <BsEmojiSmileFill className={clsx(styles.inforBoxIcon,styles.inforBoxIconStyle1)}/>
                    <AiFillLike className={clsx(styles.inforBoxIcon,styles.inforBoxIconStyle2)}/>
                    <span className={styles.likeCount}>{likeCount}</span>
                </div>

                <div className={clsx(styles.inforBoxLeft,'d-flex-r')}>
                   <span >{commentCount>1?`${commentCount} Comments`:`${commentCount} Comment`}</span>
                    <span >{post.shareCount>1?`${post.shareCount} Shares`:`${post.shareCount} Share`}</span>
                </div>
            </div>

            {/* horizontal                 */}
            <div className={styles.hr}></div>

            {/* btn action */}
            <div className={clsx(styles.actionBtns,'d-flex-r')}>
                    <div className={styles.btnBox} onClick={handleLikeClick}>
                        <AiOutlineLike  className={clsx(styles.btnIcon,{[styles.activeLiked]:isLiked})}/>
                        <span>Like</span>
                    </div>
                    <div className={styles.btnBox} onClick={handleActiveComment}>
                        <FaRegCommentAlt className={styles.btnIcon}/>
                        <span>Comment</span>
                    </div>
                    <div className={styles.btnBox}>
                        <FaRegShareSquare className={styles.btnIcon}/>
                        <span>Share</span>
                    </div>
            </div>
            {/* comments */}
            <Comments commentsApi={post.comments}  isActiveCommentBox={isActiveCommentBox}/>
        </div>

    </div>
  )
}
