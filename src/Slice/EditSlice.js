import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updatePost = createAsyncThunk(async ({ id, postData }) => {
  const response = await axios.patch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    postData
  );
  return response.data;
});

const updateSlice = createSlice({
  name: "update",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default updateSlice.reducer;
export const updateSliceActions = updateSlice.actions;
