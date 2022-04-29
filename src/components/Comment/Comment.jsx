import clsx from 'clsx'
import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { calDate } from '../../functions/functions.js'
import CommentForm from '../CommentForm/CommentForm'
import Modal from '../Modal/Modal'
import CommitCard from '../Popup/CommitCard/CommitCard'
import UserAvatar from '../User/UserAvatar'
import UserName from '../User/UserName'
import styles from './Comment.module.scss'
export default function Comment({
    comment,
    replies,
    DeleteComment,
    activeComment,
    setActiveComment,
    addComment,
    handleUpdateComment,
    isActiveCommentBox,
}) {
    const currentUser = useSelector((state) => state.user.currentUser)
    const [isCommentLiked, setIsCommentLiked] = useState(comment.isLiked)
    const [commentLikedIconStyle, setCommentLikedIconStyle] = useState({})
    const [isShowAlert, setIsShowAlert] = useState(false)
    const canActionCommentTime = 0
    const timePassed =
        new Date() - new Date(comment.createdAt) > canActionCommentTime
    const canReply = Boolean(currentUser.id)
    const canEdit = comment.user.userId === currentUser.id && timePassed
    const canDelete = comment.user.userId === currentUser.id && timePassed
    const isReply =
        activeComment &&
        activeComment.style === 'Reply' &&
        activeComment.commentId === comment.id
    const isEdit =
        activeComment &&
        activeComment.style === 'Edit' &&
        activeComment.commentId === comment.id
    const commentParentId = comment.parentId ? comment.parentId : comment.id

    const handleShowAlert = () => {
        setIsShowAlert((prev) => !prev)
    }
    const handleDeleteComment = (commentId) => {
        DeleteComment(commentId)
    }
    const handleLikeCommentClick = () => {
        if (isCommentLiked) {
            setCommentLikedIconStyle({})
            setIsCommentLiked((prev) => !prev)
        } else {
            setCommentLikedIconStyle({
                color: '#F5C33B',
            })
            setIsCommentLiked((prev) => !prev)
        }
    }
    return (
        <div className={styles.comment}>
            <UserAvatar
                className={styles.userAvatar}
                userAvatar={comment.user.avatar}
            />
            <div className={styles.body}>
                {/* user comment name */}
                <div className={styles.header}>
                    <UserName
                        firstName={comment.user.firstName}
                        lastName={comment.user.lastName}
                        className={styles.userName}
                    />

                    <div className={styles.time}>
                        {calDate(comment.createdAt)}
                    </div>
                </div>

                {/* comment content */}
                <div className={styles.content}>{comment.content}</div>

                {/* action buttom */}
                <div className={styles.actionBtns}>
                    <div
                        className={styles.actionBtn}
                        onClick={handleLikeCommentClick}>
                        <AiFillLike
                            style={commentLikedIconStyle}
                            className={styles.actionIcon}
                        />
                    </div>
                    {canReply && (
                        <div
                            className={styles.actionBtn}
                            onClick={() => {
                                setActiveComment({
                                    commentId: comment.id,
                                    style: 'Reply',
                                })
                            }}>
                            Reply
                        </div>
                    )}

                    {canEdit && (
                        <div
                            className={styles.actionBtn}
                            onClick={() => {
                                setActiveComment({
                                    commentId: comment.id,
                                    style: 'Edit',
                                })
                            }}>
                            Edit
                        </div>
                    )}

                    {canDelete && (
                        <div
                            className={styles.actionBtn}
                            onClick={handleShowAlert}>
                            Delete
                        </div>
                    )}
                </div>
                {/* Call modal when delete btn is called */}
                {isShowAlert && (
                    <Modal>
                        <CommitCard
                            handleShowAlert={handleShowAlert}
                            handleAlertActions={() =>
                                handleDeleteComment(comment.id)
                            }
                            title={'Delete Comment?'}
                            messenger={
                                'Are you sure you want to delete this comment?'
                            }
                        />
                    </Modal>
                )}
                {/* form */}

                {isReply && (
                    <CommentForm
                        className={clsx(styles.reply, {
                            [styles.activeReplyCommentForm]: isReply,
                        })}
                        userAvatar={currentUser.avatar}
                        handleSubmit={addComment}
                        parentId={commentParentId}
                        initialValue={`@${comment.user.lastName} ${comment.user.firstName}  `}
                        subMitType='create'
                        isActiveCommentBox={isActiveCommentBox}
                    />
                )}
                {isEdit && (
                    <CommentForm
                        className={clsx(styles.edit, {
                            [styles.activeEditcommentForm]: isEdit,
                        })}
                        userAvatar={currentUser.avatar}
                        handleSubmit={(content) => {
                            handleUpdateComment(content, comment.id)
                        }}
                        initialValue={`${comment.content} `}
                        subMitType='edit'
                        isActiveCommentBox={isActiveCommentBox}
                    />
                )}

                {/* reply                        */}

                <div className={styles.replies}>
                    {replies?.map((reply) => {
                        return (
                            <Comment
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
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
