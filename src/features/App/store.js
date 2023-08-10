import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "/src/slice/sliceFolder/BurgerSlice.jsx";



const store = configureStore({
    reducer: {
        burgers: burgerReducer
    }
})
export default store