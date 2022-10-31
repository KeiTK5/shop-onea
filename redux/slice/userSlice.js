import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../pages/api/api";

export const fetchUser = createAsyncThunk("user/fetchUser", async (object) => {
  try {
    const response = await api.getUser(object);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  response: [],
};

export const userSlice = createSlice({
  name: "user",
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
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.response = action.payload?.data;
    });
    builder.addCase(fetchUser.pending, (state) => {
    });
    builder.addCase(fetchUser.rejected, (state) => {
    });
  },
});

// Action creators are generated for each case reducer function
export const { getDataSuccess, getDataPending, getDataErr } = userSlice.actions;

export default userSlice.reducer;
