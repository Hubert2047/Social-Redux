import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLogin: false,
        currentUser: {
            uid: '',
            firstName: '',
            lastName: '',
            avatar: '',
        },
    },
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
            state.isLogin = !state.isLogin
        },
        setUsers(state, action) {
            state.users = [...action.payload]
        },
        addUser(state, action) {
            state.users = [...state.users, action.payload]
        },
    },
})
const userActions = userSlice.actions
export { userActions }
export default userSlice
