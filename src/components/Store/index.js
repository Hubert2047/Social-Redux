import { configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import commentSlice from './comment-slice'
import headerSlice from './header-slice'
import modalSlice from './modal-slice'
import postSlile from './post-slice'
import shareSlice from './share-slice'
import userSlice from './user-slice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

const store = configureStore({
    reducer: {
        share: shareSlice.reducer,
        post: postSlile.reducer,
        header: headerSlice.reducer,
        comment: commentSlice.reducer,
        modal: modalSlice.reducer,
        user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export default store
