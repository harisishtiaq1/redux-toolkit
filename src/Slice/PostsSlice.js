import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: "",
  message: "",
};
export const getData = createAsyncThunk("posts/getData", async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    console.log("res.data", res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});
const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log({ action });
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.message = "rejected";
    });
  },
});

export default postSlice.reducer;
export const postSliceActions = postSlice.actions;
