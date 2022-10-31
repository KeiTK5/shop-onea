import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../pages/api/api";

export const searchData = createAsyncThunk("search/searchData", async (text) => {
  try {
    const response = await api.search(text);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  response: [],
  loading: "idle",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // getDataSuccess: (state, action) => {
    //   state.response = action.payload;
    // },
    // getDataPending: (state) => {
    //   console.log("pending");
    // },
    // getDataErr: (state) => {
    //   console.log("err");
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(searchData.fulfilled, (state, action) => {
      state.response = action.payload?.data;
      state.loading = "succeeded";
    });
    builder.addCase(searchData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(searchData.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { getDataSuccess, getDataPending, getDataErr } = searchSlice.actions;

export default searchSlice.reducer;
