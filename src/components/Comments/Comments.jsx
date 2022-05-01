import clsx from 'clsx'
import React, { useState } from 'react'
import Comment from '../Comment/Comment'
import CommentForm from '../CommentForm/CommentForm'
import styles from './Comments.module.scss'

export default function Comments({ post }) {
    const [activeComment, setActiveComment] = useState({})
    let rootComments = post.comments
        ?.filter((comment) => comment.parentId === null)
        .sort((a, b) => {
            return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
        })
    const getReplies = (commentId) => {
        return post.comments
            .filter((comment) => comment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
            )
    }

    return (
        <div
            className={clsx(styles.comments)}
            onClick={(e) => {
                e.stopPropagation()
            }}>
            <CommentForm
                subMitType='create'
                post={post}
                setActiveComment={setActiveComment}
            />
            <div>
                {rootComments?.map((rootComment) => {
                    return (
                        <Comment
                            key={rootComment.id}
                            comment={rootComment}
                            replies={getReplies(rootComment.id)}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            commentParentId={null}
                            post={post}
                        />
                    )
                })}
            </div>
        </div>
    )
}
