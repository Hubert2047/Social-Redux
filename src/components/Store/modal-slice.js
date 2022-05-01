import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {},
    reducers: {},
})
const modalActions = modalSlice.actions
export default modalSlice
export { modalActions }
