import { doc, updateDoc } from 'firebase/firestore'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { MdPhotoCamera } from 'react-icons/md'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase'
import UserAvatar from '../User/UserAvatar'
import styles from './CommentForm.module.scss'

export default function CommentForm({
    parentId,
    initialValue,
    subMitType,
    className,
    post,
    commentId,
    setActiveComment,
}) {
    const inputRef = useRef()
    const currentUser = useSelector((state) => state.user.currentUser)
    const [comment, setComment] = useState({
        id: '',
        uid: currentUser.uid,
        likes: [],
        content: initialValue ? initialValue : '',
        parentId: parentId ? parentId : null,
        createdAt: '',
    })
    useLayoutEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleOnChange = (e) => {
        setComment((prevComment) => {
            return { ...prevComment, [e.target.name]: e.target.value }
        })
    }
    const handleCreateCommentApi = (docToUpdateComment, comment) => {
        updateDoc(docToUpdateComment, {
            comments: [...post.comments, comment],
        })
            .then(() => {})
            .catch((err) => {
                alert(err.message)
            })
    }
    const handleUpdateCommentApi = (docToUpdateComment, updateComments) => {
        updateDoc(docToUpdateComment, {
            comments: updateComments,
        })
            .then(() => {})
            .catch((err) => {
                alert(err.message)
            })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const docToUpdateComment = doc(db, 'post', post.id)
        if (subMitType === 'create') {
            const newComment = {
                ...comment,
                id: uuidv4(),
                createdAt: new Date().toLocaleString(),
            }
            handleCreateCommentApi(docToUpdateComment, newComment)
        } else if (subMitType === 'edit') {
            const updateComments = post.comments.map((x) => {
                if (x.id === commentId) {
                    return { ...x, content: comment.content }
                }
                return x
            })
            handleUpdateCommentApi(docToUpdateComment, updateComments)
        }
        // post xong cmt thì xoá dữ liệu ở input
        setComment({ ...comment, content: '' })
        //close comment form
        setActiveComment()
    }
    return (
        <div className={className}>
            <form onSubmit={onSubmit} className={styles.commentForm}>
                <UserAvatar userAvatar={currentUser.avatar} />
                <div className={styles.body}>
                    <div className={styles.inputBox}>
                        <input
                            ref={inputRef}
                            type='text'
                            value={comment.content}
                            placeholder={'Write an answer ...'}
                            name='content'
                            onChange={handleOnChange}
                            className={styles.input}
                        />
                        <div className={styles.actionBtn}>
                            <BsEmojiSmile className={styles.actionIcon} />
                            <MdPhotoCamera className={styles.actionIcon} />
                            <AiOutlineFileGif className={styles.actionIcon} />
                            <RiChatSmile3Fill className={styles.actionIcon} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
