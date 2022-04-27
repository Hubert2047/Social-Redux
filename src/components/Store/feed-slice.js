import { createSlice } from '@reduxjs/toolkit'

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        posts: [],
        activeCommentBoxId: null,
    },
    reducers: {
        setPosts(state, action) {
            state.posts = [...action.payload]
        },
        setActiveCommentBoxId(state, action) {
            if (state.activeCommentBoxId === action.payload) {
                state.activeCommentBoxId = null
            } else {
                state.activeCommentBoxId = action.payload
            }
        },
        setIsLiked(state, action) {
            const currentPostIndex = state.posts.findIndex(
                (post) => post.id === action.payload
            )
            if (state.posts[currentPostIndex].isLiked) {
                state.posts[currentPostIndex].likeCount--
            } else {
                state.posts[currentPostIndex].likeCount++
            }
            state.posts[currentPostIndex].isLiked =
                !state.posts[currentPostIndex].isLiked
        },
    },
})

const feedActions = feedSlice.actions
export { feedActions }
export default feedSlice
