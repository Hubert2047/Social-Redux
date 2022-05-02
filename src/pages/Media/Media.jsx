import clsx from 'clsx'
import { React, useState } from 'react'
import { BsSkipEnd, BsSkipStart, BsVolumeUpFill } from 'react-icons/bs'
import { IoIosPause, IoMdVolumeOff } from 'react-icons/io'
import { IoCaretBackCircleOutline } from 'react-icons/io5'
import { VscDebugRestart } from 'react-icons/vsc'
import MusicCard from '../../components/MusicCard/MusicCard'
import styles from './Media.module.scss'
export default function Media() {
    const [isPause, setIsPause] = useState(true)
    const handleInputBar = (e) => {
        console.log(e.target.value)
    }
    const handleVolumeBar = (e) => {
        console.log(e.target.value)
    }
    const handleOnOff = () => {
        setIsPause((prev) => !prev)
    }
    return (
        <div className={styles.media}>
            <div className={styles.main}></div>
            <div className={clsx(styles.footer, 'd-flex-r')}>
                <div className={clsx(styles.left, 'd-flex-r')}>
                    <div className={clsx(styles.waves, 'd-flex-r')}>
                        <div className={clsx(styles.wave, styles.wave1)}></div>
                        <div className={clsx(styles.wave, styles.wave2)}></div>
                        <div className={clsx(styles.wave, styles.wave3)}></div>
                        <div className={clsx(styles.wave, styles.wave4)}></div>
                    </div>
                    <div className={styles.songCard}>
                        <MusicCard />
                    </div>
                </div>
                <div className={clsx(styles.mid, 'd-flex-r')}>
                    <div className={clsx(styles.groupControls, 'd-flex-r')}>
                        <VscDebugRestart className={styles.controlBtn} />
                        <BsSkipStart
                            className={clsx(styles.backBtn, styles.controlBtn)}
                        />
                        {!isPause && (
                            <IoIosPause
                                onClick={handleOnOff}
                                className={clsx(
                                    styles.onBtn,
                                    styles.controlBtn
                                )}
                            />
                        )}
                        {isPause && (
                            <IoCaretBackCircleOutline
                                onClick={handleOnOff}
                                className={clsx(
                                    styles.offBtn,
                                    styles.controlBtn
                                )}
                            />
                        )}
                        <BsSkipEnd
                            className={clsx(styles.nextBtn, styles.controlBtn)}
                        />
                    </div>
                    <div className={clsx(styles.thumpBox, 'd-flex-r')}>
                        <span className={styles.startTime}>00:00</span>
                        <div className={styles.bar}>
                            <input
                                onChange={handleInputBar}
                                type='range'
                                step={1}
                                min={0}
                                max={100}
                                className={styles.inputThump}
                            />
                            <div className={styles.thump}></div>
                            <div className={styles.dot}></div>
                        </div>
                        <span className={styles.endTime}>00:00</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={clsx(styles.volumeBox, 'd-flex-r')}>
                        {false && (
                            <BsVolumeUpFill className={styles.volumeIcon} />
                        )}
                        {true && (
                            <IoMdVolumeOff className={styles.volumeIcon} />
                        )}
                        <div className={styles.volumBar}>
                            <input
                                onChange={handleVolumeBar}
                                type='range'
                                step={1}
                                min={0}
                                max={100}
                                className={styles.inputVol}
                            />
                            <div className={styles.volThump}></div>
                            <div className={styles.volDot}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
