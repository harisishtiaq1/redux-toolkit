import { configureStore } from "@reduxjs/toolkit";
import PostsSliceReducer from "../Slice/PostsSlice";
import EditSliceReducer from "../Slice/EditSlice";
const store=configureStore({
    reducer:{
        postReducer:PostsSliceReducer,
        EditReducer:EditSliceReducer
    }
})
export default store;