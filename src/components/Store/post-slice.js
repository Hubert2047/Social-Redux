import { createSlice } from '@reduxjs/toolkit'
const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        isActiveCommentBox: false,
        isLiked: false,
        likeCount: 0,
    },
    reducers: {
        getPosts(state, action) {
            state.posts = [...action.payload]
        },
        activeCommentBox(state, action) {
            state.isActiveCommentBox = !state.isActiveCommentBox
        },
        likeBtnClicked(state, action) {
            if (state.isLiked) {
                state.likeCount--
            } else {
                state.likeCount++
            }
            state.isLiked = !state.isLiked
        },
    },
})

const postActions = postSlice.actions

export default postSlice
export { postActions }
