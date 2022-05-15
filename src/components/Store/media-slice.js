import { createSlice } from '@reduxjs/toolkit'
const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        albums: null,
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
        prevMusics: [0],
        showOptionTableId: null,
        currentSongIndex: 0,
        currentPlaylist: [],
    },
    reducers: {
        setAudioSetting(state, action) {
            state.audioSetting = {
                ...state.audioSetting,
                [action.payload.type]: action.payload.value,
            }
        },
        setAlbums(state, action) {
            state.albums = action.payload
        },
        setIsPaused(state, action) {
            state.isPaused = action.payload
        },
        setCurrentPlayList(state, action) {
            state.currentPlaylist = action.payload
        },
        setCurrentSongIndex(state, action) {
            state.prevMusics.unshift(state.currentSongIndex)
            state.currentSongIndex = action.payload
        },
        setIsLoaded(state, action) {
            state.isLoaded = action.payload
        },
        setPrevIndex(state, action) {
            state.currentSongIndex = state.prevMusics[0]
            state.prevMusics.splice(0, 1)
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
