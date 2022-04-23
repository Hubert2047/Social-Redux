import React,{useState} from 'react'
import clsx from 'clsx'
import styles from './Comment.module.scss'
import{calDate} from '../../functions/functions.js'
import CommentForm from '../CommentForm/CommentForm'
import UserAvatar from '../User/UserAvatar'
import UserName from '../User/UserName';
import { AiFillLike } from "react-icons/ai";
import {user} from '../../data/api.js'
import Modal from '../Modal/Modal';
import CommitCard from '../Popup/CommitCard/CommitCard';
export default function Comment({
  comment,
  replies,
  DeleteComment,
  activeComment,
  setActiveComment,
  addComment,
  handleUpdateComment,
  isActiveCommentBox
}) {
  const [isCommentLiked,setIsCommentLiked]=useState(comment.isLiked)
  const [commentLikedIconStyle,setCommentLikedIconStyle]=useState({})
  const [isShowCommitDelete,setIsShowCommitDelete] = useState(false)

  const canActionCommentTime=0
  const timePassed = new Date()- new Date(comment.createdAt)>canActionCommentTime
  const canReply =Boolean(user.userId)
  const canEdit = comment.user.userId === user.userId && timePassed
  const canDelete=comment.user.userId === user.userId && timePassed
  const isReply = activeComment && activeComment.style==='Reply' && activeComment.commentId=== comment.id
  const isEdit = activeComment && activeComment.style==='Edit' && activeComment.commentId=== comment.id
  const commentParentId= comment.parentId?comment.parentId:comment.id

  const hideModal=()=>{
    setIsShowCommitDelete(false)
  }
  const handleDeleteComment=(commentId)=>{
    DeleteComment(commentId)
  }
  const handleLikeCommentClick=() => {
    if(isCommentLiked){
        setCommentLikedIconStyle({
        })

        setIsCommentLiked(prev=>!prev)
    }else{
        setCommentLikedIconStyle({
          color:'#F5C33B'
        })
          setIsCommentLiked(prev=>!prev)
    }
  }
  return (
    <div className={styles.comment} >
      <UserAvatar className={styles.userAvatar} userAvatar={comment.user.avatar}/>
      <div className={styles.body}>
            {/* user comment name */}
            <div className={styles.header}>
                <UserName firstName={comment.user.firstName} 
                              lastName={comment.user.lastName}
                              className={styles.userName}
                              />
        
                <div className={styles.time}>{ calDate(comment.createdAt)}</div>
          </div>

          {/* comment content */}
          <div className={styles.content}>
            {comment.content}
          </div>

          {/* action buttom */}
          <div className={styles.actionBtns}>
            <div className={styles.actionBtn} onClick={handleLikeCommentClick}>
              <AiFillLike style={commentLikedIconStyle} className={styles.actionIcon} />
            </div>
            {canReply && <div className={styles.actionBtn}
                              onClick={()=>{
                              setActiveComment({commentId:comment.id,style:'Reply'})
                              }}
                          >Reply</div>}

            {canEdit && <div className={styles.actionBtn}
                            onClick={()=>{
                              setActiveComment({commentId:comment.id,style:'Edit'})
                              }}>Edit</div>}

            {canDelete && <div className={styles.actionBtn} 
                            onClick={       
                              ()=>{
                                //open modal commit delete
                                setIsShowCommitDelete(prev=>!prev)
                              }
                            }
                            >Delete</div>}
          </div>
          {/* Call modal when delete btn is called */}
          {isShowCommitDelete && <Modal hideModal={hideModal} popup={<CommitCard handleDeleteComment={()=>handleDeleteComment(comment.id)} hideModal={hideModal} title={'Delete Comment?'} messenger={'Are you sure you want to delete this comment?'}/>}/>}
          {/* form */}

        {isReply &&  <CommentForm 
                                  className={clsx(styles.reply,{[styles.activeReplyCommentForm]:isReply})}
                                  userAvatar={user.avatar}
                                  handleSubmit={addComment}
                                  parentId={commentParentId}
                                  initialValue={`@${comment.user.lastName} ${comment.user.firstName}  `}
                                  subMitType='create'
                                  isActiveCommentBox={isActiveCommentBox}
                                  />}
          {isEdit &&<CommentForm 
                                  className={clsx(styles.edit,{[styles.activeEditcommentForm]:isEdit})}
                                  userAvatar={user.avatar}
                                  handleSubmit={(content)=>{handleUpdateComment(content,comment.id)}}
                                  initialValue={`${comment.content} `}
                                  subMitType = 'edit'
                                  isActiveCommentBox={isActiveCommentBox}
                                  />}


          {/* reply                        */}

          <div className={styles.replies}>
            {replies?.map(reply=>{
              return <Comment 
              key={reply.id} 
              comment={reply} 
              replies={[]} 
              DeleteComment={DeleteComment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment} 
              handleUpdateComment={handleUpdateComment}
              isActiveCommentBox={isActiveCommentBox}
              />
            })}
          </div>
      </div>
     
    </div>
  )
}
