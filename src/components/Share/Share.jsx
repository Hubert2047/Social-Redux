import clsx from 'clsx'
import { React } from 'react'
import { BsFillEmojiSmileFill, BsFillImageFill } from 'react-icons/bs'
import { TiVideo } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modal/Modal'
import CreatePost from '../Popup/CreatePost/CreatePost'
import { shareActions } from '../Store/share-slice'
import UserAvatar from '../User/UserAvatar'
import styles from './Share.module.scss'
export default function Share() {
    const currentUser = useSelector((state) => state.user.currentUser)
    const isShowCreatePost = useSelector(
        (state) => state.share.isShowCreatePost
    )
    const dispatch = useDispatch()
    const handleShowCreatePost = () => {
        dispatch(shareActions.setIsShowCreatePost())
    }
    return (
        <div className={styles.share}>
            <div className={clsx(styles.top, 'd-flex-r')}>
                <UserAvatar userAvatar={currentUser.avatar} />
                <input
                    type='text'
                    className={styles.input}
                    placeholder={`What's on your mind ${currentUser.firstName} ?`}
                    onClick={handleShowCreatePost}
                />
            </div>
            <div className={clsx('hr')} />
            <ul className={clsx(styles.optionBtns, 'd-flex-r')}>
                <li className={clsx(styles.optionBtn, 'd-flex-r')}>
                    <TiVideo className={styles.optionBtnStyle1} />
                    <span>Live Video</span>
                </li>

                <li className={clsx(styles.optionBtn, 'd-flex-r')}>
                    <BsFillImageFill className={styles.optionBtnStyle2} />
                    <span>Photo/Video</span>
                </li>

                <li className={clsx(styles.optionBtn, 'd-flex-r')}>
                    <BsFillEmojiSmileFill className={styles.optionBtnStyle3} />
                    <span>Feeling/activity</span>
                </li>
            </ul>
            {isShowCreatePost && (
                <Modal handleShowModal={handleShowCreatePost}>
                    <CreatePost handleShowModal={handleShowCreatePost} />
                </Modal>
            )}
        </div>
    )
}
