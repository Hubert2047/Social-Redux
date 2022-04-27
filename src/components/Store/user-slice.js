import{createSlice} from'@reduxjs/toolkit'
const userSlice = createSlice({
        name: 'user',
        initialState: {
                isLogin: false,
        },
        reducers:{
                setIsLogin(state){
                        state.isLogin=!state.isLogin;
                }
        }
})
const userActions = userSlice.actions
export {userActions}
export default userSlice