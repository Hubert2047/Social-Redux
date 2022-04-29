import { createSlice } from '@reduxjs/toolkit'
const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        comment: {
            id: '',
            postId: '',
            user: {},
            isLiked: false,
            content: '',
            parentId: null,
            createdAt: new Date().toLocaleString(),
        },
    },
    reducers: {
        addComment(state) {
            state.comments.push(state.comment)
        },
        createComment(state, action) {
            state.comment = {
                ...state.comment,
                [action.payload.type]: action.payload.value,
            }
        },
    },
})
const commentActions = commentSlice.actions
export default commentSlice
export { commentActions }
