import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../pages/api/api";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await api.getData();
    return response;
  } catch (error) {
    console.log(error);
  }
});



const initialState = {
  response: [],
  loading: "idle",
};

export const dataSlice = createSlice({
  name: "data",
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
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.response = action.payload?.data;
      state.loading = "succeeded";
    });
    builder.addCase(fetchData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { getDataSuccess, getDataPending, getDataErr } = dataSlice.actions;

export default dataSlice.reducer;
