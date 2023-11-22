import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    id: null,
}


export const reservationSlice = createSlice({
    name: "reservation",
    initialState,

    reducers: {
        incrementer: ((state) => { state.value += 1 }),
        decrementer: ((state) => { state.value -= 1 }),
        // getID:((state)=>{state.id}),
        setID(state, action) { state.id = action.payload.id }
    }

})

export const { incrementer, decrementer, setID } = reservationSlice.actions;
export default reservationSlice.reducer;
