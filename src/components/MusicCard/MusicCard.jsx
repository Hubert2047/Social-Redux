import clsx from 'clsx'
import { React, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { IoPause } from 'react-icons/io5'
import { RiPlayFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import MusicOptionCard from '../MusicOptionCard/MusicOptionCard'
import SongCard from '../SongCard/SongCard'
import { mediaActions } from '../Store/media-slice'
import Wave from '../Wave/Wave'
import styles from './MusicCard.module.scss'

export default function MusicCard({ order, song }) {
    const dispatch = useDispatch()
    const currentPlaylist = useSelector((state) => state.media.currentPlaylist)
    const currentSongIndex = useSelector(
        (state) => state.media.currentSongIndex
    )
    const isLoaded = useSelector((state) => state.media.isLoaded)
    const isShowOptionTable =
        useSelector((state) => state.media.showOptionTableId) === song.id
    const currentSong = currentPlaylist[currentSongIndex]
    const [isMusicCardHovered, setIsMusicCardHovered] = useState(false)
    const isPaused = useSelector((state) => state.media.isPaused)
    const optionIconRef = useRef()
    const [optionTableStyle, setOptionTableStyle] = useState({})
    const musicCardRef = useRef()
    const optionTableRef = useRef()

    const isDisplayWave =
        !isPaused &&
        currentSong.id === song.id &&
        !isMusicCardHovered &&
        isLoaded
    const isShowOffBtn =
        (isMusicCardHovered && currentSong.id !== song.id) ||
        (isMusicCardHovered && currentSong.id === song.id && isPaused)
    const isShowOnBtn =
        isMusicCardHovered &&
        !isPaused &&
        currentSong.id === song.id &&
        isLoaded
    const isShowOrder =
        (!isMusicCardHovered && currentSong.id !== song.id) ||
        (!isMusicCardHovered && currentSong.id === song.id && isPaused) ||
        !isLoaded
    const handleMusicCardOnMouseEnter = () => {
        setIsMusicCardHovered(true)
    }
    const onMouseEnterTextStyle = {
        color: 'var(--green-color)',
    }
    const handleMusicCardOnMouseLeave = () => {
        setIsMusicCardHovered(false)
    }
    const handleMusicCardOnClick = () => {
        dispatch(mediaActions.setCurrentSongIndex(song.index))
        dispatch(mediaActions.setIsPaused(false))
    }
    //232
    const handleIconOptionOnClick = (e) => {
        e.stopPropagation()
        dispatch(mediaActions.setShowOptionTableId(song.id))
        const tableHeight = optionTableRef.current.offsetHeight
        const rangeOfIconToTopParrentElm =
            optionIconRef.current.getBoundingClientRect().top -
            musicCardRef.current.parentNode.getBoundingClientRect().top

        const rangeOfIconToBottomParrentElm =
            musicCardRef.current.parentNode.getBoundingClientRect().bottom -
            optionIconRef.current.getBoundingClientRect().top
        if (rangeOfIconToBottomParrentElm > tableHeight) {
            setOptionTableStyle({})
        } else if (rangeOfIconToTopParrentElm > tableHeight + 10) {
            setOptionTableStyle({
                transform: `translate(-100%, -${
                    rangeOfIconToTopParrentElm - 10
                }px)`,
            })
        } else {
            const randomHeight = Math.floor(Math.random() * (100 - 20) + 20)
            setOptionTableStyle({
                transform: `translate(-100%, -${
                    rangeOfIconToTopParrentElm - randomHeight
                }px)`,
            })
        }
    }
    return (
        <div
            ref={musicCardRef}
            className={styles.musicCard}
            onMouseEnter={handleMusicCardOnMouseEnter}
            onMouseLeave={handleMusicCardOnMouseLeave}
            onClick={handleMusicCardOnClick}>
            <div className={styles.order}>
                {isShowOrder && <span>{order}</span>}
                {isDisplayWave && <Wave />}
                {isShowOffBtn && <RiPlayFill className={styles.playBtn} />}
                {isShowOnBtn && <IoPause className={styles.playBtn} />}
            </div>
            <SongCard
                song={song}
                textStyle={isMusicCardHovered ? onMouseEnterTextStyle : {}}
            />
            <div className={clsx(styles.option, 'd-flex-r')}>
                {isMusicCardHovered && (
                    <div className={styles.likeBox}>
                        <div
                            ref={optionIconRef}
                            onClick={handleIconOptionOnClick}
                            className={clsx(styles.iconBox, 'd-flex-r')}>
                            <BsThreeDots className={styles.playBtn} />
                        </div>
                        <div
                            ref={optionTableRef}
                            onClick={(e) => {
                                e.stopPropagation()
                            }}
                            style={optionTableStyle}
                            className={clsx(styles.musicOptionCard, {
                                [styles.showwOptionTable]: isShowOptionTable,
                            })}>
                            <MusicOptionCard song={song} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
