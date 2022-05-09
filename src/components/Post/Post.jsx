import clsx from 'clsx'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { React, useState } from 'react'
import { AiFillLike, AiOutlineLike, AiTwotoneEdit } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsBellFill, BsBookmarkFill, BsEmojiSmileFill } from 'react-icons/bs'
import { FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa'
import { GoReport } from 'react-icons/go'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase'
import Comments from '../Comments/Comments'
import Loading from '../Loading/Loading'
import Modal from '../Modal/Modal'
import CommitCard from '../Popup/CommitCard/CommitCard'
import SharePost from '../Popup/SharePost/SharePost'
import { postActions } from '../Store/post-slice'
import UserPost from '../User/UserPost'
import styles from './Post.module.scss'

export default function Post({ post }) {
    const isActiveCommentBox =
        useSelector((state) => state.post.showCommentBoxId) === post.id
    const isShowPostOption =
        useSelector((state) => state.post.showPostOptionId) === post.id
    const isShowEditPost =
        useSelector((state) => state.post.showEditPostId) === post.id
    const currentUser = useSelector((state) => state.user.currentUser)
    const users = useSelector((state) => state.user.users)
    const createdBy = users.find((user) => user.uid === post.uid)
    const commentCount = post.comments.length
    const shareCount = post.shares.length
    const likeCount = post.likes.length
    const [isLiked, setIsLiked] = useState(() => {
        return post.likes?.some((like) => like.uid === currentUser.uid)
    })
    const [isShowAlert, setIsShowAlert] = useState(false)
    const [isShowLoading, setIsShowLoading] = useState(false)
    const dispath = useDispatch()
    const handleLikeClick = async () => {
        const doctoUpdateLike = doc(db, 'post', post.id)
        if (!isLiked) {
            const newLike = { id: uuidv4(), uid: currentUser.uid }
            try {
                await updateDoc(doctoUpdateLike, {
                    likes: [...post.likes, newLike],
                })
            } catch (err) {
                alert(err.message)
            }
        } else {
            try {
                const updateLikes = post.likes.filter(
                    (like) => like.uid !== currentUser.uid
                )
                await updateDoc(doctoUpdateLike, {
                    likes: updateLikes,
                })
            } catch (err) {
                alert(err.message)
            }
        }
        setIsLiked((prev) => !prev)
    }
    const handleActiveComment = () => {
        dispath(postActions.setShowCommentBoxId(post.id))
    }
    const handleShowAlert = () => {
        setIsShowAlert((prev) => !prev)
    }
    const handleHideAlertModal = () => {
        setIsShowAlert((prev) => !prev)
    }
    const handleShowPostOptions = () => {
        dispath(postActions.setShowPostOptionId(post.id))
    }
    const handleHideEditPostModal = () => {
        dispath(postActions.setShowEditPostId(null))
    }
    const handleShowEditPost = () => {
        dispath(postActions.setPost(post))
        dispath(postActions.setShowEditPostId(post.id))
    }
    const handleDeletePost = async () => {
        setIsShowLoading(true)
        const deletePostDoc = doc(db, 'post', post.id)
        try {
            await deleteDoc(deletePostDoc)
        } catch (e) {
            alert(e.message)
        } finally {
            setIsShowLoading(false)
        }
    }
    return (
        <div className={styles.post}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <UserPost
                    createAt={new Date(post.createdAt).toLocaleString()}
                    userAvatar={createdBy.avatar}
                    firstName={createdBy.firstName}
                    lastName={createdBy.lastName}
                />
                <div className={styles.changePost}>
                    <BiDotsHorizontalRounded
                        onClick={handleShowPostOptions}
                        className={styles.changeIcon}
                    />
                    {isShowPostOption && (
                        <ul className={clsx(styles.listSetting, 'd-flex-c')}>
                            {post.uid === currentUser.uid && (
                                <li
                                    onClick={handleShowEditPost}
                                    className={clsx(
                                        styles.settingItem,
                                        'd-flex-r'
                                    )}>
                                    <AiTwotoneEdit
                                        className={styles.settingIcon}
                                    />
                                    <span>Edit post</span>
                                </li>
                            )}
                            {post.uid === currentUser.uidw && (
                                <li
                                    onClick={handleShowAlert}
                                    className={clsx(
                                        styles.settingItem,
                                        'd-flex-r'
                                    )}>
                                    <RiDeleteBin5Fill
                                        className={styles.settingIcon}
                                    />
                                    <span>Delete post</span>
                                </li>
                            )}
                            <li
                                className={clsx(
                                    styles.settingItem,
                                    'd-flex-r'
                                )}>
                                <BsBookmarkFill
                                    className={styles.settingIcon}
                                />
                                <span>Save post</span>
                            </li>

                            <li
                                className={clsx(
                                    styles.settingItem,
                                    'd-flex-r'
                                )}>
                                <BsBellFill className={styles.settingIcon} />
                                <span>Turn on notifications for this post</span>
                            </li>
                            <li
                                className={clsx(
                                    styles.settingItem,
                                    'd-flex-r'
                                )}>
                                <GoReport className={styles.settingIcon} />
                                <span>Report post</span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div>
                <p className={styles.content}>{post.content}</p>
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
                        <span className={styles.likeCount}>{likeCount}</span>
                    </div>

                    <div className={clsx(styles.inforBoxLeft, 'd-flex-r')}>
                        <span>
                            {commentCount > 1
                                ? `${commentCount} Comments`
                                : `${commentCount} Comment`}
                        </span>
                        <span>
                            {post.shareCount > 1
                                ? `${shareCount} Shares`
                                : `${shareCount} Share`}
                        </span>
                    </div>
                </div>
                {/* btn action */}
                <div className={clsx(styles.actionBtns, 'd-flex-r')}>
                    <div className={styles.btnBox} onClick={handleLikeClick}>
                        <AiOutlineLike
                            className={clsx(styles.btnIcon, {
                                [styles.activeLiked]: isLiked,
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
                {isActiveCommentBox && <Comments post={post} />}
            </div>
            {/* show change post                */}
            {isShowEditPost && (
                <Modal handleHideModal={handleHideEditPostModal}>
                    <SharePost
                        title={'Edit Post'}
                        handleHideModal={handleHideEditPostModal}
                    />
                </Modal>
            )}
            {/* Call modal when delete btn is called */}
            {isShowAlert && (
                <Modal handleHideModal={handleHideAlertModal}>
                    <CommitCard
                        handleHideAlert={handleHideAlertModal}
                        handleAlertActions={handleDeletePost}
                        title={'Delete Post?'}
                        messenger={'Are you sure you want to delete this post?'}
                    />
                </Modal>
            )}
            {/* show loading */}
            {isShowLoading && (
                <Modal>
                    <Loading />
                </Modal>
            )}
        </div>
    )
}
