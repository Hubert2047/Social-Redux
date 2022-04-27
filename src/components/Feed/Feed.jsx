import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../../data/api.js'
import CreateRoom from '../CreateRoom/CreateRoom'
import Post from '../Post/Post'
import Share from '../Share/Share'
import { feedActions } from '../Store/feed-slice'
import Stories from '../Stories/Stories'
import styles from './Feed.module.scss'
export default function Feed({ className }) {
    const postsAPI = user.posts.sort(
        (a, b) => new Date(a.createAt) - new Date(b.createAt)
    )
    const posts = useSelector((state) => state.feed.posts)
    const dispath = useDispatch()
    useEffect(() => {
        dispath(feedActions.setPosts(postsAPI))
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
