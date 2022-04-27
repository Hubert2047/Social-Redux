import { configureStore } from '@reduxjs/toolkit'
import postSlile from './post-slice'
import feedSlice from './feed-slice'
const store = configureStore({
    reducer: {
        post: postSlile.reducer,
        feed: feedSlice.reducer,
    },
})

export default store
