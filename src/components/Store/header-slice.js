import { createSlice } from '@reduxjs/toolkit'
const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isOpenSetting: false,
        activeNavbarId: 1,
    },
    reducers: {
        setOpenSetting(state) {
            state.isOpenSetting = !state.isOpenSetting
        },
        setActiveNavbarId(state, action) {
            state.activeNavbarId = action.payload
        },
    },
})
const headerActions = headerSlice.actions
export default headerSlice
export { headerActions }
