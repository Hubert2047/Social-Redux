import clsx from 'clsx'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { React, useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsEmojiSmile, BsFillFileEarmarkImageFill } from 'react-icons/bs'
import { FaUserTag } from 'react-icons/fa'
import { GiMicrophone } from 'react-icons/gi'
import { GoSmiley } from 'react-icons/go'
import { ImLocation } from 'react-icons/im'
import { MdColorLens } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { db, storage } from '../../../firebase'
import Loading from '../../Loading/Loading'
import Modal from '../../Modal/Modal'
import ShareType from '../../ShareType/ShareType'
import { postActions } from '../../Store/post-slice'
import UserAvatar from '../../User/UserAvatar'
import UserName from '../../User/UserName'
import styles from './SharePost.module.scss'

export default function SharePost({ title, handleHideModal }) {
    const currentUser = useSelector((state) => state.user.currentUser)
    let post = useSelector((state) => state.post.post)
    const [isShowLoading, setIsShowLoading] = useState(false)
    const dispatch = useDispatch()
    const [imgData, setImgData] = useState({})
    const isDisableSubmit = post.content.length === 0 && post.img === ''
    const inputRef = useRef()
    useLayoutEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleOnChange = (e) => {
        dispatch(
            postActions.onChange({ type: 'content', value: e.target.value })
        )
    }
    const handlePreviewInputImg = (e) => {
        setImgData(e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            dispatch(
                postActions.onChange({ type: 'img', value: reader.result })
            )
        }
    }
    const UpdateImgToFirebase = () => {
        return new Promise((resolve, reject) => {
            const storageRef = ref(storage, `images/ ${imgData.name}`)
            const uploadTask = uploadBytesResumable(storageRef, imgData)
            uploadTask.on(
                'state_changed',
                (snapshot) => {},
                (error) => {
                    reject(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            resolve(downloadURL)
                        }
                    )
                }
            )
        })
    }

    const handleCreatePost = async (postApi, createCollectionRef) => {
        try {
            await addDoc(createCollectionRef, postApi)
        } catch (error) {
            alert(error.message)
        } finally {
            dispatch(postActions.setIsShowCreatePost(null))
        }
    }
    const handleEditPost = async (postApi, editDocRef) => {
        try {
            await updateDoc(editDocRef, postApi)
        } catch (error) {
            alert(error.message)
        } finally {
            dispatch(postActions.setShowEditPostId(null))
        }
    }
    const handleSubmit = async () => {
        setIsShowLoading(true)
        post = {
            ...post,
            uid: currentUser.uid,
        }
        if (post.img !== '') {
            try {
                const downloadURL = await UpdateImgToFirebase()
                post = {
                    ...post,
                    img: downloadURL,
                }
            } catch (error) {
                alert(error)
            }
        }
        if (title === 'Create Post') {
            post = {
                ...post,
                createdAt: new Date().toLocaleString(),
            }
            const createCollectionRef = collection(db, 'post')
            handleCreatePost(post, createCollectionRef)
        } else if (title === 'Edit Post') {
            const editDocRef = doc(db, 'post', post.id)
            handleEditPost(post, editDocRef)
        }
    }
    return (
        <div
            className={clsx(styles.createPost, 'd-flex-c')}
            onClick={(e) => {
                e.stopPropagation()
            }}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <div className={styles.title}>{title} </div>
                <div className={styles.closeBtn} onClick={handleHideModal}>
                    <AiOutlineCloseCircle className={styles.icon} />
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.bodyTop}>
                    <UserAvatar userAvatar={currentUser.avatar} />
                    <div className={styles.bodyTopBox}>
                        <UserName
                            firstName={currentUser.firstName}
                            lastName={currentUser.lastName}
                        />
                        <ShareType />
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.shareContent}>
                        <textarea
                            ref={inputRef}
                            onChange={handleOnChange}
                            onFocus={() => {
                                inputRef.current.value = post.content
                            }}
                            className={styles.shareText}
                            placeholder={`What's on your mind, ${currentUser.firstName}?`}
                        />
                        {post.img && (
                            <div className={styles.shareImgBox}>
                                <img
                                    src={post.img}
                                    alt='share'
                                    className={styles.shareImg}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.optionBtns}>
                        <MdColorLens className={styles.optionBtnStyle1} />
                        <BsEmojiSmile className={styles.optionBtnStyle2} />
                    </div>
                </div>
                <div className={styles.bodyBottom}>
                    <div className={styles.actionBtn}>
                        <button className={styles.addFeature}>
                            Add to your post
                        </button>
                        <div className={'d-flex-r'}>
                            <input
                                type='file'
                                id='import-file'
                                accept='image/*,image/jpg'
                                value={''}
                                onChange={handlePreviewInputImg}
                                className={styles.inputFile}
                            />
                            <label
                                htmlFor={'import-file'}
                                className={styles.importFileBtn}>
                                <BsFillFileEarmarkImageFill
                                    className={clsx(
                                        styles.icon,
                                        styles.iconStyle1
                                    )}
                                />
                            </label>
                            <FaUserTag
                                className={clsx(styles.icon, styles.iconStyle2)}
                            />
                            <GoSmiley
                                className={clsx(styles.icon, styles.iconStyle3)}
                            />
                            <ImLocation
                                className={clsx(styles.icon, styles.iconStyle4)}
                            />
                            <GiMicrophone
                                className={clsx(styles.icon, styles.iconStyle5)}
                            />
                            <BiDotsHorizontalRounded
                                className={clsx(styles.icon, styles.iconStyle6)}
                            />
                        </div>
                    </div>
                    <button
                        type='button'
                        onClick={handleSubmit}
                        disabled={isDisableSubmit}
                        className={clsx(
                            styles.submitBtn,
                            'btn',
                            {
                                'btn-grey': isDisableSubmit,
                            },
                            { 'btn-blue': !isDisableSubmit }
                        )}>
                        Post
                    </button>
                </div>
            </div>
            {isShowLoading && (
                <Modal>
                    <Loading />
                </Modal>
            )}
        </div>
    )
}
