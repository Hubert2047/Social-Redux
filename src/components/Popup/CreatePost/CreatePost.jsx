import clsx from 'clsx'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { React, useEffect, useState } from 'react'
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
import { shareActions } from '../../Store/share-slice'
import UserAvatar from '../../User/UserAvatar'
import UserName from '../../User/UserName'
import styles from './CreatePost.module.scss'

export default function CreatePost({ handleShowModal }) {
    const currentUser = useSelector((state) => state.user.currentUser)
    let post = useSelector((state) => state.post.post)
    const content = useSelector((state) => state.post.post.content) // lấy ra để kiem tra xem nội dung đã tồn tại cưa
    const isShowLoading = useSelector((state) => state.post.isShowLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(postActions.onChange({ type: 'user', value: currentUser }))
    }, [])
    const handleOnChange = (e) => {
        dispatch(
            postActions.onChange({ type: 'content', value: e.target.value })
        )
    }
    const [imgData, setImgData] = useState({})
    const [previewImg, setPreviewImg] = useState('')
    const isDisableSubmit = content.length === 0 && previewImg === ''
    const handleShowLoading = () => {}
    const handlePreviewInputImg = (e) => {
        setImgData(e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setPreviewImg(reader.result)
        }
    }
    const handleSubmit = () => {
        dispatch(postActions.setIsShowLoading(true))
        const storageRef = ref(storage, `images/ ${imgData.name}`)
        const uploadTask = uploadBytesResumable(storageRef, imgData)
        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    dispatch(
                        postActions.onChange({
                            type: 'img',
                            value: downloadURL,
                        })
                    )
                    post = {
                        ...post,
                        img: downloadURL,
                        createdAt: new Date().toLocaleString(),
                    }
                    handlePutPostApi()
                    dispatch(postActions.setIsShowLoading())
                    dispatch(shareActions.setIsShowCreatePost())
                })
            }
        )
    }
    const handlePutPostApi = () => {
        const collectionRef = collection(db, `users/${currentUser.id}/post`)
        const { id, ...postApi } = post
        addDoc(collectionRef, postApi)
            .then((res) => {
                dispatch(postActions.addPost({ ...post, id: res.id }))
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <div
            className={clsx(styles.createPost, 'd-flex-c')}
            onClick={(e) => {
                e.stopPropagation()
            }}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <div className={styles.title}>Create post</div>
                <div className={styles.closeBtn} onClick={handleShowModal}>
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
                            onChange={handleOnChange}
                            className={styles.shareText}
                            value={content}
                            placeholder={`What's on your mind, ${currentUser.firstName}?`}
                        />
                        {previewImg && (
                            <div className={styles.shareImgBox}>
                                <img
                                    src={previewImg}
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
                <Modal handleShowModal={handleShowLoading}>
                    <Loading />
                </Modal>
            )}
        </div>
    )
}
