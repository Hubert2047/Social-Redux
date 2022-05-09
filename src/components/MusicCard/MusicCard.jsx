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
    const [isShowOptionTable, setIsShowOptionTable] = useState(false)
    const currentPlaylist = useSelector((state) => state.media.currentPlaylist)
    // const songIndex = currentPlaylist.findIndex((item) => item.id === song.id)
    const currentSongIndex = useSelector(
        (state) => state.media.currentSongIndex
    )
    const isLoaded = useSelector((state) => state.media.isLoaded)
    const currentSong = currentPlaylist[currentSongIndex]
    const [isMusicCardHovered, setIsMusicCardHovered] = useState(false)
    const isPaused = useSelector((state) => state.media.isPaused)
    const optionIconRef = useRef()
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

        setIsShowOptionTable((prev) => !prev)

        console.log(optionIconRef.current.getBoundingClientRect().bottom)
    }
    return (
        <div
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
                {true && (
                    <div className={styles.likeBox}>
                        <div
                            ref={optionIconRef}
                            onClick={handleIconOptionOnClick}
                            className={clsx(styles.iconBox, 'd-flex-r')}>
                            <BsThreeDots className={styles.playBtn} />
                        </div>
                        {song.id === currentPlaylist[0].id && (
                            <div
                                ref={optionTableRef}
                                className={styles.musicOptionCard}>
                                <MusicOptionCard song={song} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
