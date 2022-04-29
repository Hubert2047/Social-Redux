import clsx from 'clsx'
import { React } from 'react'
import { RiAddCircleFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { user } from '../../data/api.js'
import Story from '../Story/Story'
import styles from './Stories.module.scss'

export default function Stories() {
    let stories = user.stories
    const currentUser = useSelector((state) => state.user.currentUser)
    if (!Array.isArray(stories) || stories.length <= 0) {
        return null
    }
    return (
        <div className={clsx(styles.stories, 'd-flex-r')}>
            <div className={styles.currentUser}>
                <img
                    src={currentUser.avatar}
                    alt=''
                    className={styles.currentUserAvatar}
                />
                <RiAddCircleFill className={styles.createIcon} />
                <p className={styles.createText}>Create Story</p>
                <div className={styles.createLayout}></div>
            </div>
            {/* render others user story */}
            {stories?.map((story) => {
                return (
                    <Story
                        key={story.id}
                        img={story.img}
                        avatar={story.createBy.avatar}
                        firstName={story.createBy.firstName}
                        lastName={story.createBy.lastName}
                    />
                )
            })}
        </div>
    )
}
