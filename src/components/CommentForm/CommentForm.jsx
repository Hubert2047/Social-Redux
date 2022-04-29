import React, { useState } from 'react'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { MdPhotoCamera } from 'react-icons/md'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import UserAvatar from '../User/UserAvatar'
import styles from './CommentForm.module.scss'

export default function CommentForm({
    userAvatar,
    handleSubmit,
    parentId,
    initialValue,
    subMitType,
    className,
}) {
    const currentUser = useSelector((state) => state.user.currentUser)
    const [text, setText] = useState(() => {
        return initialValue ? initialValue : ''
    })
    const onSubmit = (e) => {
        e.preventDefault()
        if (subMitType === 'create') {
            handleSubmit({
                id: Math.random().toString(36).substr(2, 9),
                user: {
                    userId: currentUser.id,
                    avatar: currentUser.avatar,
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                },
                isLiked: false,
                content: text,
                parentId: parentId ? parentId : null,
                createdAt: new Date().toLocaleString(),
            })
        } else if (subMitType === 'edit') {
            handleSubmit(text)
        }

        setText('')
    }
    return (
        <div className={className}>
            <form onSubmit={onSubmit} className={styles.commentForm}>
                <UserAvatar userAvatar={currentUser.avatar} />
                <div className={styles.body}>
                    <div className={styles.inputBox}>
                        <input
                            type='text'
                            value={text}
                            placeholder={'Write an answer ...'}
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
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
