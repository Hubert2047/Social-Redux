import { createSlice } from '@reduxjs/toolkit'
const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post: {
            id: '',
            user: {},
            createdAt: new Date().toLocaleString(),
            content: '',
            img: '',
            isLiked: false,
        },
        isActiveCommentBox: false,
        isLiked: false,
        likeCount: 0,
        isShowLoading: false,
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
        addPost(state) {
            state.posts = [...state.posts, { ...state.post }]
        },
        createPost(state, action) {
            state.post = {
                ...state.post,
                [action.payload.type]: action.payload.value,
            }
        },
        setIsShowLoading(state, action) {
            state.isShowLoading = action.payload
        },
    },
})

const postActions = postSlice.actions

export default postSlice
export { postActions }
