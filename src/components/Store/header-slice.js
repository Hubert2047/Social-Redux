import { createSlice } from '@reduxjs/toolkit'
const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isOpenSetting: null,
        activeNavbarId: 1,
    },
    reducers: {
        setOpenSetting(state, action) {
            state.isOpenSetting = action.payload
        },
        setActiveNavbarId(state, action) {
            state.activeNavbarId = action.payload
        },
    },
})
const headerActions = headerSlice.actions
export default headerSlice
export { headerActions }
