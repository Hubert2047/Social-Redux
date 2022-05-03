import clsx from 'clsx'
import { React, useRef, useState } from 'react'
import { BsSkipEnd, BsSkipStart, BsVolumeUpFill } from 'react-icons/bs'
import { IoIosPause, IoMdVolumeOff } from 'react-icons/io'
import { IoCaretBackCircleOutline } from 'react-icons/io5'
import { VscDebugRestart } from 'react-icons/vsc'
import MusicCard from '../../components/MusicCard/MusicCard'
import styles from './Media.module.scss'
export default function Media() {
    const [isPause, setIsPause] = useState(true)
    const handleInputBar = (e) => {
        // audioRef.current.currentTime=
    }
    const [audioSetting, setAudioSetting] = useState({
        currentTime: '00:00',
        endTime: '00:00',
        currentProces: 0,
    })
    const audioRef = useRef()
    const handleVolumeBar = (e) => {
        console.log(e.target.value)
    }
    const thumpStyle = { width: `${audioSetting.currentProces}%` }
    const dotStyle = { left: `${audioSetting.currentProces - 2}%` }
    const handleTimeUpdate = () => {
        let audioCurrentTime = audioRef.current.currentTime
        let audioDuration = audioRef.current.duration
        let currentTimeMin = Math.floor(audioCurrentTime / 60)
        currentTimeMin =
            currentTimeMin < 10 ? `0${currentTimeMin}` : currentTimeMin
        let currentTimeSec = Math.floor(audioCurrentTime % 60)
        currentTimeSec =
            currentTimeSec < 10 ? `0${currentTimeSec}` : currentTimeSec
        let endTimeMin = Math.floor((audioDuration - audioCurrentTime) / 60)
        endTimeMin = currentTimeMin < 10 ? `0${endTimeMin}` : endTimeMin
        let endTimeSec = Math.floor((audioDuration - audioCurrentTime) % 60)
        endTimeSec = currentTimeSec < 10 ? `0${endTimeSec}` : endTimeSec
        let currentProces = Math.floor((audioCurrentTime / audioDuration) * 100)
        setAudioSetting({
            currentTime: `${currentTimeMin}:${currentTimeSec}`,
            endTime: `${endTimeMin}:${endTimeSec}`,
            currentProces: currentProces,
        })
    }
    const handleOnOff = () => {
        if (isPause) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
        setIsPause((prev) => !prev)
    }
    return (
        <div className={styles.media}>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                src='./nhactest.mp3'></audio>
            <div className={styles.main}></div>
            <div className={clsx(styles.footer, 'd-flex-r')}>
                <div className={clsx(styles.left, 'd-flex-r')}>
                    <div className={clsx(styles.waves, 'd-flex-r')}>
                        <div
                            className={clsx(styles.wave, styles.wave1, {
                                [styles.waveAnimated]: !isPause,
                            })}></div>
                        <div
                            className={clsx(styles.wave, styles.wave2, {
                                [styles.waveAnimated]: !isPause,
                            })}></div>
                        <div
                            className={clsx(styles.wave, styles.wave3, {
                                [styles.waveAnimated]: !isPause,
                            })}></div>
                        <div
                            className={clsx(styles.wave, styles.wave4, {
                                [styles.waveAnimated]: !isPause,
                            })}></div>
                        <div
                            className={clsx(styles.wave, styles.wave5, {
                                [styles.waveAnimated]: !isPause,
                            })}></div>
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
                        <span className={styles.startTime}>
                            {audioSetting.currentTime}
                        </span>
                        <div className={styles.bar}>
                            <input
                                onChange={handleInputBar}
                                type='range'
                                step={1}
                                min={0}
                                max={100}
                                className={styles.inputThump}
                            />
                            <div
                                style={thumpStyle}
                                className={styles.thump}></div>
                            <div style={dotStyle} className={styles.dot}></div>
                        </div>
                        <span className={styles.endTime}>
                            {audioSetting.endTime}
                        </span>
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
