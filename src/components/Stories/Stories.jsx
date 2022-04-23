import {React} from 'react'
import styles from './Stories.module.scss'
import {user} from '../../data/api.js'
import { RiAddCircleFill } from "react-icons/ri";
import clsx from 'clsx';
import Story from '../Story/Story';

export default function Stories() {
  let stories = user.stories
   if(!Array.isArray(stories)|| stories.length<=0){
    return null;
  }
  return (
    <div className={clsx(styles.stories,'d-flex-r')}>
            <div className={styles.currentUser}>
              <img src={user.avatar} alt="" className={styles.currentUserAvatar} />
              <RiAddCircleFill className={styles.createIcon}/>
              <p className={styles.createText}>Create Story</p>
              <div className={styles.createLayout}></div>
            </div>
            {/* render others user story */}
            {stories?.map(story => {
              return <Story  key={story.id} img={story.img} avatar={story.createBy.avatar} firstName={story.createBy.firstName} lastName={story.createBy.lastName}/>
            })}
        
    </div>
  )
}
