import React from 'react'
import clsx from 'clsx'
import Share from '../Share/Share';
import Stories from '../Stories/Stories';
import Post from '../Post/Post';
import styles from './Feed.module.scss'
import {user} from '../../data/api.js'
import CreateRoom from '../CreateRoom/CreateRoom';


export default function Feed({className}) {
  const posts=user.posts.sort((a,b)=> new Date(a.createAt) - new Date(b.createAt))

  return (
    <div className={clsx(styles.feed,className)}>
       <Stories />
       <div className={styles.main}>
         <Share/>
         <CreateRoom className={styles.createRoom}/>
         {posts?.map(post =>{
           return (
             <Post key={post.id} post={post}/>
           )
         })}
       </div>
    </div>
  )
}
