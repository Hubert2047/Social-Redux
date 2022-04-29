import clsx from 'clsx'
import React from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../../data/api.js'
import Comments from '../Comments/Comments'
import { feedActions } from '../Store/feed-slice'
import UserPost from '../User/UserPost'
import styles from './Post.module.scss'
export default function Post({ post }) {
    // const activeCommentBoxId = useSelector(
    //     (state) => state.feed.activeCommentBoxId
    // )
    // const isActiveCommentBox = activeCommentBoxId === post.id
    const dispath = useDispatch()
    const handleActiveComment = () => {
        dispath(feedActions.setActiveCommentBoxId(post.id))
    }
    const handleLikeClick = () => {
        dispath(feedActions.setIsLiked(post.id))
    }
    // const commentCount = user.posts.find((x) => x.id === post.id).comments
    //     ?.length
    return (
        <div className={styles.post}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <UserPost
                    createAt={new Date(post.createAt).toLocaleString()}
                    userAvatar={post.user.avatar}
                    firstName={post.user.firstName}
                    lastName={post.user.lastName}
                />
                <BiDotsHorizontalRounded className={styles.changeIcon} />
            </div>
            <div>
                <div className={styles.content}>{post.content}</div>
                <img src={post.img} alt='' className={styles.img} />
            </div>
            <div className={styles.footer}>
                <div className={clsx(styles.inforBox, 'd-flex-r')}>
                    <div className={clsx(styles.inforBoxRight, 'd-flex-r')}>
                        <BsEmojiSmileFill
                            className={clsx(
                                styles.inforBoxIcon,
                                styles.inforBoxIconStyle1
                            )}
                        />
                        <AiFillLike
                            className={clsx(
                                styles.inforBoxIcon,
                                styles.inforBoxIconStyle2
                            )}
                        />
                        <span className={styles.likeCount}>
                            {post.likeCount}
                        </span>
                    </div>

                    <div className={clsx(styles.inforBoxLeft, 'd-flex-r')}>
                        <span>
                            {/* {commentCount > 1
                                ? `${commentCount} Comments`
                                : `${commentCount} Comment`} */}
                        </span>
                        <span>
                            {/* {post.shareCount > 1
                                ? `${post.shareCount} Shares`
                                : `${post.shareCount} Share`} */}
                        </span>
                    </div>
                </div>

                {/* horizontal                 */}
                <div className={styles.hr}></div>

                {/* btn action */}
                <div className={clsx(styles.actionBtns, 'd-flex-r')}>
                    <div className={styles.btnBox} onClick={handleLikeClick}>
                        <AiOutlineLike
                            className={clsx(styles.btnIcon, {
                                [styles.activeLiked]: post.isLiked,
                            })}
                        />
                        <span>Like</span>
                    </div>
                    <div
                        className={styles.btnBox}
                        onClick={handleActiveComment}>
                        <FaRegCommentAlt className={styles.btnIcon} />
                        <span>Comment</span>
                    </div>
                    <div className={styles.btnBox}>
                        <FaRegShareSquare className={styles.btnIcon} />
                        <span>Share</span>
                    </div>
                </div>
                {/* comments */}
                {/* {isActiveCommentBox && <Comments comment={post.comments} />} */}
            </div>
        </div>
    )
}
