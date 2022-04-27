import { configureStore } from '@reduxjs/toolkit'
import postSlile from './post-slice'
import feedSlice from './feed-slice'
import headerSlice from './header-slice'
import userSlice from './user-slice'
const store = configureStore({
    reducer: {
        post: postSlile.reducer,
        feed: feedSlice.reducer,
        header: headerSlice.reducer,
        user: userSlice.reducer,
    },
})

export default store
