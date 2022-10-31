import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../pages/api/api";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const response = await api.getCart();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const updateCart = async (id, object) => {
  try {
    const response = await api.patchCart(id, object);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  response: [],
  loading: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
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
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.response = action.payload?.data?.reverse();
      state.loading = "succeeded";
    });
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCart.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { getDataSuccess, getDataPending, getDataErr } = cartSlice.actions;

export default cartSlice.reducer;
