import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../../slice/sliceFolder/burgerSlice";



const store = configureStore({
    reducer: {
        burgers: burgerReducer
    }
})
export default store