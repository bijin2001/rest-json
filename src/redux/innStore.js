import { configureStore } from "@reduxjs/toolkit";
import dishCardSlice from "./dishCardSlice";


const innStore = configureStore({
    reducer:{
        dishCardReducer:dishCardSlice
    }
})
export default innStore