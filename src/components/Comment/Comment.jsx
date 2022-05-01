import clsx from 'clsx'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import { FaSmileBeam } from 'react-icons/fa'
import { IoHeartCircleSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase'
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
    activeComment,
    setActiveComment,
    post,
}) {
    const users = useSelector((state) => state.user.users)
    const currentUser = useSelector((state) => state.user.currentUser)
    const [isShowAlert, setIsShowAlert] = useState(false)
    const createdBy = users.find((user) => user.uid === comment.uid)
    const countCommentLike = comment.likes.length
    const [isLikedComment, setIsLikedComment] = useState(() =>
        comment.likes.some((comment) => comment.uid === currentUser.uid)
    )
    const canActionCommentTime = 0
    const timePassed =
        new Date() - new Date(comment.createdAt) > canActionCommentTime
    const canReply = Boolean(currentUser.uid)
    const canEdit = comment.uid === currentUser.uid && timePassed
    const canDelete = comment.uid === currentUser.uid && timePassed
    const isReply =
        activeComment &&
        activeComment.style === 'Reply' &&
        activeComment.commentId === comment.id
    const isEdit =
        activeComment &&
        activeComment.style === 'Edit' &&
        activeComment.commentId === comment.id
    const commentParentId = comment.parentId ? comment.parentId : comment.id

    const handleIsShowAlert = () => {
        setIsShowAlert((prev) => !prev)
    }
    const handleDeleteComment = async () => {
        const doctoUpdateComment = doc(db, 'post', post.id)
        const updateCommentLikes = post.comments.filter(
            (like) => like.id !== comment.id
        )
        try {
            await updateDoc(doctoUpdateComment, {
                comments: updateCommentLikes,
            })
        } catch (e) {
            alert(e.message)
        } finally {
            handleIsShowAlert()
        }
    }
    const handleLikeCommentClick = async () => {
        const docUpdateCommentLike = doc(db, 'post', post.id)
        let updateCommens = {}
        if (isLikedComment) {
            updateCommens = post.comments.map((x) => {
                if (x.id === comment.id) {
                    const updateLikes = x.likes?.filter(
                        (like) => like.uid !== currentUser.uid
                    )
                    return { ...x, likes: updateLikes }
                }
                return x
            })
        } else {
            updateCommens = post.comments?.map((x) => {
                if (x.id === comment.id) {
                    const updateLikes = [
                        ...x.likes,
                        { id: uuidv4(), uid: currentUser.uid },
                    ]
                    return { ...x, likes: updateLikes }
                }
                return x
            })
        }
        try {
            updateDoc(docUpdateCommentLike, {
                comments: updateCommens,
            })
        } catch (e) {
            alert(e.message)
        } finally {
            setIsLikedComment((prev) => !prev)
        }
    }
    return (
        <div className={styles.comment}>
            <div className={'d-flex-r'}>
                <div className={styles.commentAvatar}>
                    <UserAvatar userAvatar={createdBy.avatar} />
                </div>
                <div className={styles.body}>
                    {/* user comment name */}
                    <div className={styles.bodyTop}>
                        <div className={styles.header}>
                            <UserName
                                firstName={createdBy.firstName}
                                lastName={createdBy.lastName}
                                className={styles.userName}
                            />
                            <div className={styles.time}>
                                {calDate(comment.createdAt)}
                            </div>
                        </div>
                        {/* comment content */}
                        <div className={styles.content}>{comment.content}</div>
                    </div>
                    {/* action buttom */}
                    <div className={styles.actionBtns}>
                        <div className={clsx(styles.actionBtnBox, 'd-flex-r')}>
                            <div
                                className={styles.actionBtn}
                                onClick={handleLikeCommentClick}>
                                <BsFillEmojiHeartEyesFill
                                    className={clsx(styles.actionIcon, {
                                        [styles.likeCommentIconStyle]:
                                            isLikedComment,
                                    })}
                                />
                            </div>
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
                                    onClick={handleIsShowAlert}>
                                    Delete
                                </div>
                            )}
                            {canReply && (
                                <div
                                    className={clsx(styles.actionBtn)}
                                    onClick={() => {
                                        setActiveComment({
                                            commentId: comment.id,
                                            style: 'Reply',
                                        })
                                    }}>
                                    Reply
                                </div>
                            )}
                        </div>
                        {countCommentLike > 0 && (
                            <div
                                className={clsx(
                                    styles.countCommentLike,
                                    'd-flex-r'
                                )}>
                                <IoHeartCircleSharp
                                    className={clsx(
                                        styles.countCommentLikeIcon,
                                        styles.heartLikeStyle
                                    )}
                                />
                                {countCommentLike > 1 && (
                                    <FaSmileBeam
                                        className={clsx(
                                            styles.countCommentLikeIcon,
                                            styles.smileLikeStyle
                                        )}
                                    />
                                )}
                                {countCommentLike > 1 && (
                                    <span>{countCommentLike}</span>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Call modal when delete btn is called */}
                    {isShowAlert && (
                        <Modal>
                            <CommitCard
                                handleHideAlert={handleIsShowAlert}
                                handleAlertActions={handleDeleteComment}
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
                            className={clsx(styles.reply)}
                            parentId={commentParentId}
                            initialValue={`@${createdBy.lastName} ${createdBy.firstName}  `}
                            subMitType='create'
                            post={post}
                            commentId={comment.id}
                            setActiveComment={setActiveComment}
                        />
                    )}
                    {isEdit && (
                        <CommentForm
                            className={clsx(styles.edit)}
                            initialValue={`${comment.content} `}
                            subMitType='edit'
                            post={post}
                            commentId={comment.id}
                            setActiveComment={setActiveComment}
                        />
                    )}
                    {/* reply  */}
                </div>
            </div>

            <div className={styles.replies}>
                {replies?.map((reply) => {
                    return (
                        <Comment
                            key={reply.id}
                            comment={reply}
                            replies={[]}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            post={post}
                        />
                    )
                })}
            </div>
        </div>
    )
}
