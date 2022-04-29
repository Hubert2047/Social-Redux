import { createSlice } from '@reduxjs/toolkit'

const shareSlice = createSlice({
    name: 'share',
    initialState: {
        isShowCreatePost: false,
    },
    reducers: {
        setIsShowCreatePost(state) {
            if (state.isShowCreatePost) {
                document.body.classList.remove('hide')
            } else {
                document.body.classList.add('hide')
            }
            state.isShowCreatePost = !state.isShowCreatePost
        },
    },
})

const shareActions = shareSlice.actions
export { shareActions }
export default shareSlice
