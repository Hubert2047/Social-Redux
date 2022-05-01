import { createSlice } from '@reduxjs/toolkit'
const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post: {
            uid: '',
            sharetype: 'public',
            createdAt: '',
            content: '',
            img: '',
            comments: [],
            likes: [],
            shares: [],
        },
        showCommentBoxId: null,
        isShowLoading: false,
        showPostOptionId: null,
        showEditPostId: null,
        isShowCreatePost: false,
    },
    reducers: {
        setShowCommentBoxId(state, action) {
            state.showCommentBoxId = action.payload
        },
        setPosts(state, action) {
            state.posts = [...action.payload]
        },
        setPost(state, action) {
            state.post = { ...action.payload }
        },
        onChange(state, action) {
            state.post = {
                ...state.post,
                [action.payload.type]: action.payload.value,
            }
        },
        setShowPostOptionId(state, action) {
            state.showPostOptionId = action.payload
        },
        setShowEditPostId(state, action) {
            if (state.showEditPostId === null) {
                document.body.classList.add('hide')
            } else {
                document.body.classList.remove('hide')
            }
            state.showEditPostId = action.payload
        },
        setIsShowCreatePost(state, action) {
            state.isShowCreatePost = action.payload
        },

        // addComment(state, action) {
        //     const currentPost = state.posts.find(
        //         (post) => post.id === action.payload.postId
        //     )
        //     currentPost.comments.push(action.payload.item)
        // },
        // updateComment(state, action) {
        //     const currentPost = state.posts.find(
        //         (post) => post.id === action.payload.postId
        //     )
        //     currentPost.comments = [...action.payload.item]
        // },
    },
})

const postActions = postSlice.actions

export default postSlice
export { postActions }
