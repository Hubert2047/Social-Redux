import React, { useState } from 'react'
import clsx from 'clsx'
import CommentForm from '../CommentForm/CommentForm'
import { user } from '../../data/api.js'
import Comment from '../Comment/Comment'
import styles from './Comments.module.scss'

export default function Comments({ comment }) {
    const [comments, setComments] = useState(comment)
    const [activeComment, setActiveComment] = useState({})
    let rootComments = comments
        .filter((comment) => comment.parentId === null)
        .sort((a, b) => {
            return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
        })
    const getReplies = (commentId) => {
        return comments
            .filter((comment) => comment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
            )
    }
    const handleAddComment = (comment) => {
        setComments([...comments, comment])
        // close comment form
        setActiveComment({})
    }

    const handleUpdateComment = (content, commentId) => {
        let updateComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return { ...comment, content: content }
            }
            return comment
        })
        setComments(updateComments)
        setActiveComment({})
    }

    const DeleteComment = (commentId) => {
        let updateComments = comments.filter(
            (comment) => comment.id !== commentId
        )
        setComments(updateComments)
    }

    return (
        <div className={clsx(styles.comments)}>
            <CommentForm
                userAvatar={user.avatar}
                handleSubmit={handleAddComment}
                initialValue={''}
                subMitType='create'
            />
            <div>
                {rootComments.map((rootComment) => {
                    return (
                        <Comment
                            key={rootComment.id}
                            comment={rootComment}
                            replies={getReplies(rootComment.id)}
                            DeleteComment={DeleteComment}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            addComment={handleAddComment}
                            handleUpdateComment={handleUpdateComment}
                            commentParentId={null}
                        />
                    )
                })}
            </div>
        </div>
    )
}
