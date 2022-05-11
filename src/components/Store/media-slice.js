import { createSlice } from '@reduxjs/toolkit'
const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        playlists: [
            {
                id: 1,
                listName: 'Chinese',
                poster: '../assets/person/3.jpeg',
                songs: [
                    {
                        id: 1,
                        poster: '../assets/person/1.jpeg',
                        src: 'https://firebasestorage.googleapis.com/v0/b/social-redux-toolkit.appspot.com/o/music%2Fchongaycuoi.mp3?alt=media&token=b7948527-feee-4d25-ac6f-e7951d610f33',
                        songName: 'cho ngay cuoi',
                        singerName: 'hubert',
                    },
                    {
                        id: 2,
                        poster: '../assets/person/2.jpeg',
                        src: '../assets/music/damcuoinha.mp3',
                        songName: 'nothing gonna change my love for you',
                        singerName: 'hubert',
                    },
                    {
                        id: 3,
                        poster: '../assets/person/3.jpeg',
                        src: '../assets/music/damcuoinha.mp3',
                        songName: 'nothing gonna change my love for you',
                        singerName: 'hubert',
                    },
                    {
                        id: 4,
                        poster: '../assets/person/3.jpeg',
                        src: '../assets/music/damcuoinha.mp3',
                        songName: 'nothing gonna change my love for you',
                        singerName: 'hubert',
                    },
                ],
            },
            {
                id: 2,
                listName: 'English',
                poster: '../assets/person/2.jpeg',
                songs: [
                    {
                        id: 1,
                        poster: '../assets/person/5.jpeg',
                        src: '../assets/music/chongaycuoi.mp3',
                        songName: 'cho ngay cuoi',
                        singerName: 'hubert',
                    },
                    {
                        id: 2,
                        poster: '../assets/person/8.jpeg',
                        src: '../assets/music/damcuoinha.mp3',
                        songName: 'nothing gonna change my love for you',
                        singerName: 'hubert',
                    },
                    {
                        id: 3,
                        poster: '../assets/person/10.jpeg',
                        src: '../assets/music/damcuoinha.mp3',
                        songName: 'nothing gonna change my love for you',
                        singerName: 'hubert',
                    },
                ],
            },
        ],
        audioSetting: {
            currentTime: '00:00',
            endTime: '00:00',
            currentProces: 0,
            volume: 50,
            isMuted: false,
            isRepeat: false,
        },
        isLoaded: false,
        isPaused: true,
        preMusics: [],
        showOptionTableId: null,
        prevSongIndex: null,
        currentSongIndex: null,
        currentPlaylist: [],
    },
    reducers: {
        setAudioSetting(state, action) {
            state.audioSetting = {
                ...state.audioSetting,
                [action.payload.type]: action.payload.value,
            }
        },
        setIsPaused(state, action) {
            state.isPaused = action.payload
        },
        setMusics(state, action) {
            state.currentPlaylist = action.payload
        },
        setCurrentSongIndex(state, action) {
            state.preMusics.unshift(state.currentSongIndex)
            state.currentSongIndex = action.payload
        },
        setIsLoaded(state, action) {
            state.isLoaded = action.payload
        },
        setPrevIndex(state, action) {
            state.currentSongIndex = state.preMusics[0]
            state.preMusics.splice(0, 2)
        },
        setShowOptionTableId(state, action) {
            if (action.payload === state.showOptionTableId) {
                state.showOptionTableId = null
            } else {
                state.showOptionTableId = action.payload
            }
        },
    },
})

const mediaActions = mediaSlice.actions
export default mediaSlice
export { mediaActions }
