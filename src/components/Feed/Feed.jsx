import clsx from 'clsx'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../firebase'
import CreateRoom from '../CreateRoom/CreateRoom'
import Post from '../Post/Post'
import Share from '../Share/Share'
import { postActions } from '../Store/post-slice'
import Stories from '../Stories/Stories'
import styles from './Feed.module.scss'

export default function Feed({ className }) {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    const collectionRef = collection(db, `users/${currentUser.id}/post`)
    let posts = [...useSelector((state) => state.post.posts)].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    useEffect(() => {
        getDocs(collectionRef).then((data) => {
            dispatch(
                postActions.setPosts(
                    data.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            )
        })
    }, [])

    return (
        <div className={clsx(styles.feed, className)}>
            <Stories />
            <div className={styles.main}>
                <Share />
                <CreateRoom className={styles.createRoom} />
                {posts?.map((post) => {
                    return <Post key={post.id} post={post} />
                })}
            </div>
        </div>
    )
}
