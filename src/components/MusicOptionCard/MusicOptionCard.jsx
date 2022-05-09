import clsx from 'clsx'
import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import { BsHeadphones } from 'react-icons/bs'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { HiOutlineCloudDownload } from 'react-icons/hi'
import { IoMdShareAlt } from 'react-icons/io'
import { VscGitPullRequestCreate } from 'react-icons/vsc'
import styles from './MusicOptionCard.module.scss'
export default function MusicOptionCard({ song }) {
    return (
        <div className={styles.musicOptionCard}>
            <div className={clsx(styles.header, 'd-flex-r')}>
                <img src={song.poster} alt='' className={styles.poster} />
                <div className={clsx(styles.headerContent, 'd-flex-c')}>
                    <p className={styles.songName}>{song.songName}</p>
                    <div className={clsx(styles.headerIcons, 'd-flex-r')}>
                        <div className={clsx(styles.iconBox, 'd-flex-r')}>
                            <BiHeart className={styles.headerIcon} />
                            <span>2.1M</span>
                        </div>
                        <div className={clsx(styles.iconBox, 'd-flex-r')}>
                            <BsHeadphones className={styles.headerIcon} />
                            <span>3.1M</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={clsx(styles.optionList, 'd-flex-c')}>
                <li className={clsx(styles.option, 'd-flex-r')}>
                    <VscGitPullRequestCreate className={styles.optionIcon} />
                    <span>Add to playlist</span>
                </li>
                <li className={clsx(styles.option, 'd-flex-r')}>
                    <FaHandHoldingHeart className={styles.optionIcon} />
                    <span>Add to like songs</span>
                </li>
                <li className={clsx(styles.option, 'd-flex-r')}>
                    <HiOutlineCloudDownload className={styles.optionIcon} />
                    <span>Download</span>
                </li>
                <li className={clsx(styles.option, 'd-flex-r')}>
                    <AiOutlineComment className={styles.optionIcon} />
                    <span>Comment</span>
                </li>
                <li className={clsx(styles.option, 'd-flex-r')}>
                    <IoMdShareAlt className={styles.optionIcon} />
                    <span>Share</span>
                </li>
            </ul>
        </div>
    )
}
