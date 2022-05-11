import clsx from 'clsx'
import { collection, onSnapshot } from 'firebase/firestore'
import { React, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BsSkipEnd, BsSkipStart, BsVolumeUpFill } from 'react-icons/bs'
import { IoIosPause, IoMdRepeat, IoMdVolumeOff } from 'react-icons/io'
import { IoCaretBackCircleOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { mediaActions } from '../../components/Store/media-slice'
import { db } from '../../firebase'
import MediaWhiteLoading from '../Loading/MediaWhiteLoading'
import SongCard from '../SongCard/SongCard'
import Wave from '../Wave/Wave'
import styles from './MediaFooter.module.scss'
const calAudioCurrentTime = (audioCurrentTime, audioDuration) => {
    let currentTimeMin = Math.floor(audioCurrentTime / 60)
    currentTimeMin = currentTimeMin < 10 ? `0${currentTimeMin}` : currentTimeMin
    let currentTimeSec = Math.floor(audioCurrentTime % 60)
    currentTimeSec = currentTimeSec < 10 ? `0${currentTimeSec}` : currentTimeSec
    let endTimeMin = Math.floor((audioDuration - audioCurrentTime) / 60)
    endTimeMin = endTimeMin < 10 ? `0${endTimeMin}` : endTimeMin
    let endTimeSec = Math.floor((audioDuration - audioCurrentTime) % 60)
    endTimeSec = endTimeSec < 10 ? `0${endTimeSec}` : endTimeSec
    return {
        currentTime: `${currentTimeMin}:${currentTimeSec}`,
        endTime: `${endTimeMin}:${endTimeSec}`,
    }
}
export default function MediaFooter() {
    const audioRef = useRef()
    const audioSetting = useSelector((state) => state.media.audioSetting)
    const currentPlaylist = useSelector((state) => state.media.currentPlaylist)
    const isLoaded = useSelector((state) => state.media.isLoaded)
    const currentSongIndex = useSelector(
        (state) => state.media.currentSongIndex
    )
    const prevMusics = useSelector((state) => state.media.preMusics)
    const prevSongIndex = useSelector((state) => state.media.prevSongIndex)
    console.log(prevMusics)
    const currentSong = currentPlaylist[currentSongIndex]
    const isPaused = useSelector((state) => state.media.isPaused)
    const dispatch = useDispatch()
    const isReadyRender = useRef(false)
    const nextSong =
        currentPlaylist[
            currentSongIndex < currentPlaylist.length - 1
                ? currentSongIndex + 1
                : 0
        ]
    const prevSong = currentPlaylist[prevSongIndex]
    const [isShowPrevSong, setIsshowPrevSong] = useState(false)
    const [isShowNextSong, setIsshowNextSong] = useState(false)
    const collectionRef = collection(db, 'musics')
    // useEffect(() => {
    //     onSnapshot(
    //         collectionRef,
    //         (data) => {
    //             isReadyRender.current = true
    //             let index = -1
    //             dispatch(
    //                 mediaActions.setMusics(
    //                     data.docs.map((doc) => {
    //                         index++
    //                         return { id: doc.id, index: index, ...doc.data() }
    //                     })
    //                 )
    //             )
    //         },
    //         (err) => {
    //             alert(err)
    //         }
    //     )
    // }, [])
    useLayoutEffect(() => {
        //kiểm tra nếu musicCard clicked(nó tự dispath ispause=false) thi bật lại bài hát
        if (!isReadyRender.current) return
        if (!isPaused) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [currentSongIndex, isPaused])
    const handleInputBarOnChange = (e) => {
        const inputValue = e.target.value
        const changeAudioTimeValue =
            (inputValue * audioRef.current.duration) / 100
        audioRef.current.currentTime = changeAudioTimeValue
    }
    const handleVolumeBarOnChange = (e) => {
        const currentAudioVolume = parseInt(e.target.value)
        audioRef.current.volume = currentAudioVolume / 100
        if (currentAudioVolume === 0) {
            dispatch(
                mediaActions.setAudioSetting({
                    type: 'isMuted',
                    value: true,
                })
            )
        } else {
            dispatch(
                mediaActions.setAudioSetting({
                    type: 'isMuted',
                    value: false,
                })
            )
        }
        dispatch(
            mediaActions.setAudioSetting({
                type: 'volume',
                value: currentAudioVolume,
            })
        )
    }
    const handleAudioTimeUpdate = () => {
        let audioCurrentTime = audioRef.current.currentTime
        let audioDuration = audioRef.current.duration

        const audioTime = calAudioCurrentTime(audioCurrentTime, audioDuration)
        const currentProces = Math.floor(
            (audioCurrentTime / audioDuration) * 100
        )
        dispatch(
            mediaActions.setAudioSetting({
                type: 'currentTime',
                value: audioTime.currentTime,
            })
        )
        dispatch(
            mediaActions.setAudioSetting({
                type: 'endTime',
                value: audioTime.endTime,
            })
        )
        dispatch(
            mediaActions.setAudioSetting({
                type: 'currentProces',
                value: currentProces,
            })
        )
    }
    const handleRepeatAudio = () => {
        if (audioSetting.isRepeat) {
            audioRef.current.loop = false
        } else {
            audioRef.current.loop = true
        }
        dispatch(
            mediaActions.setAudioSetting({
                type: 'isRepeat',
                value: !audioSetting.isRepeat,
            })
        )
    }
    const handleMutedVolume = () => {
        if (!audioSetting.isMuted) {
            audioRef.current.muted = true
        } else {
            audioRef.current.muted = false
        }
        dispatch(
            mediaActions.setAudioSetting({
                type: 'isMuted',
                value: !audioSetting.isMuted,
            })
        )
    }
    const handleOnOff = () => {
        // if (isPaused) {
        //     audioRef.current.play()
        // } else {
        //     audioRef.current.pause()
        // }
        dispatch(mediaActions.setIsPaused(!isPaused))
    }
    const handleAudioEnded = () => {
        if (!audioSetting.isRepeat) {
            if (currentSongIndex < currentPlaylist.length - 1) {
                dispatch(mediaActions.setCurrentSongIndex(currentSongIndex + 1))
            } else {
                dispatch(mediaActions.setCurrentSongIndex(0))
            }
        }
    }
    const handleLoadStart = () => {
        dispatch(mediaActions.setIsLoaded(false))
    }
    const handleOnloadedData = () => {
        dispatch(mediaActions.setIsLoaded(true))
    }
    const handlePrevOnClick = () => {
        if (prevMusics.length > 1) {
            dispatch(mediaActions.setPrevIndex())
        }
    }
    const handleNextOnClick = () => {
        if (currentSongIndex < currentPlaylist.length - 1) {
            dispatch(mediaActions.setCurrentSongIndex(currentSongIndex + 1))
        } else {
            dispatch(mediaActions.setCurrentSongIndex(0))
        }
    }
    const handleOnPrevMouseEnter = () => {
        setIsshowPrevSong((prev) => {
            return !prev && prevSongIndex !== null
        })
    }
    const handleOnPrevMouseLeave = () => {
        setIsshowPrevSong(false)
    }
    const handleOnNextMouseEnter = () => {
        setIsshowNextSong(true)
    }
    const handleOnNextMouseLeave = () => {
        setIsshowNextSong(false)
    }
    // if (!isReadyRender.current) {
    //     return
    // }
    const thumpStyle = { width: `${audioSetting.currentProces}%` }
    const dotStyle = {
        left: `${audioSetting.currentProces}%`,
    }
    const thumpVolumeStyle = { width: `${audioSetting.volume}%` }
    const dotVolumeStyle = {
        left: `${audioSetting.volume}%`,
    }
    const sonCardTextStyle = {
        width: 'max-content',
        color: 'var(--grey-color-2)',
    }
    return (
        <div className={clsx(styles.footer, 'd-flex-r')}>
            <audio
                ref={audioRef}
                onTimeUpdate={handleAudioTimeUpdate}
                onLoadedData={handleOnloadedData}
                onLoadStart={handleLoadStart}
                onEnded={handleAudioEnded}
                src={currentSong.src}></audio>
            <div className={clsx(styles.left, 'd-flex-r')}>
                {!isPaused && isLoaded && <Wave />}
                <SongCard song={currentSong} />
            </div>
            <div className={clsx(styles.mid, 'd-flex-c')}>
                <div className={clsx(styles.groupControls, 'd-flex-r')}>
                    <div className={styles.prevSongBox}>
                        <BsSkipStart
                            onMouseLeave={handleOnPrevMouseLeave}
                            onMouseEnter={handleOnPrevMouseEnter}
                            onClick={handlePrevOnClick}
                            className={clsx(styles.backBtn, styles.controlBtn)}
                        />
                        {/* {isShowPrevSong && (
                            <div className={styles.prevSong}>
                                <SongCard
                                    song={prevSong}
                                    textStyle={sonCardTextStyle}
                                />
                            </div>
                        )} */}
                    </div>
                    {!isLoaded && <MediaWhiteLoading />}
                    {isLoaded && !isPaused && (
                        <div className={clsx(styles.onBox, 'd-flex-r')}>
                            <IoIosPause
                                onClick={handleOnOff}
                                className={clsx(styles.onBtn)}
                            />
                        </div>
                    )}
                    {isLoaded && isPaused && (
                        <IoCaretBackCircleOutline
                            onClick={handleOnOff}
                            className={clsx(styles.offBtn)}
                        />
                    )}
                    <div className={styles.nextSongBox}>
                        <BsSkipEnd
                            onMouseLeave={handleOnNextMouseLeave}
                            onMouseEnter={handleOnNextMouseEnter}
                            onClick={handleNextOnClick}
                            className={clsx(styles.nextBtn, styles.controlBtn)}
                        />
                        {isShowNextSong && (
                            <div className={styles.nextSong}>
                                <SongCard
                                    song={nextSong}
                                    textStyle={sonCardTextStyle}
                                />
                            </div>
                        )}
                    </div>
                    <IoMdRepeat
                        onClick={handleRepeatAudio}
                        className={clsx(styles.controlBtn, {
                            'grey-color': !audioSetting.isRepeat,
                        })}
                    />
                </div>
                <div className={clsx(styles.thumpBox, 'd-flex-r')}>
                    <span className={styles.startTime}>
                        {audioSetting.currentTime
                            ? audioSetting.currentTime
                            : '00:00'}
                    </span>
                    <div className={styles.bar}>
                        <input
                            onChange={handleInputBarOnChange}
                            type='range'
                            step={1}
                            min={0}
                            max={100}
                            value={
                                audioSetting.currentProces
                                    ? audioSetting.currentProces
                                    : 0
                            }
                            className={styles.inputThump}
                        />
                        <div style={thumpStyle} className={styles.thump}></div>
                        <div style={dotStyle} className={styles.dot}></div>
                    </div>
                    <span className={styles.endTime}>
                        {audioSetting.endTime !== 'NaN:NaN'
                            ? audioSetting.endTime
                            : '00:00'}
                    </span>
                </div>
            </div>
            <div className={styles.right}>
                <div className={clsx(styles.volumeBox, 'd-flex-r')}>
                    {!audioSetting.isMuted && (
                        <BsVolumeUpFill
                            onClick={handleMutedVolume}
                            className={styles.volumeIcon}
                        />
                    )}
                    {audioSetting.isMuted && (
                        <IoMdVolumeOff
                            onClick={handleMutedVolume}
                            className={styles.volumeIcon}
                        />
                    )}
                    <div className={styles.volumBar}>
                        <input
                            onChange={handleVolumeBarOnChange}
                            type='range'
                            step={1}
                            value={audioSetting.volume}
                            min={0}
                            max={100}
                            className={styles.inputVol}
                        />
                        <div
                            style={thumpVolumeStyle}
                            className={styles.volThump}></div>
                        <div
                            style={dotVolumeStyle}
                            className={styles.volDot}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
