import { configureStore } from "@reduxjs/toolkit";
import PostsSliceReducer from "../Slice/PostsSlice";
const store=configureStore({
    reducer:{
        postReducer:PostsSliceReducer
    }
})
export default store;