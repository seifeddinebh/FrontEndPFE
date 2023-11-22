import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/counterSlice";
import reservation from "./features/counter/reservationSlice";


export const store=configureStore({
    reducer:{counter},
    reducer:{reservation},
})



export default store