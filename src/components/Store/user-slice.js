import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        currentUser: {},
    },
    reducers: {
        setUser(state, action) {
            state.currentUser = { ...action.payload }
            state.isLogin = !state.isLogin
        },
    },
})
const userActions = userSlice.actions
export { userActions }
export default userSlice
