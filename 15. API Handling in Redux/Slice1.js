import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// dispatch wala kaam createAsyncThunk hi karega aur dispatch ham action ko karate hai. Action me type aur payload hota hai.
// createAsyncThunk perform dispatch by its own that's why it ask for type before async function.
// createAsyncThunk first create action for pending state as soon as it created.

// {type: Coin/fetch/pending, payload:undefined}
// {type: Coin/fetch/fulfilled, payload: data}
// {type: Coin/fetch/rejected, payload: err.message}

const FetchedData = createAsyncThunk(
  // Action : type, payload
  "Coin/fetch", // type bataya hai
  async (args, thunkAPI) => {
    // FetchedData(20) toh ye jo 20 argument hai wahi args hai.
    // thunkAPI is the one that takes care of all the dispatches
    // thunkAPI async func ka argument hai, toh iska naam kuch bhi ho skta hai

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`
      );
      const data = await response.json();
      return data; // ye data jo ham return kar rahe hai wo jata hai payload ke andar
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// reducers → for normal synchronous state updates.
// extraReducers → for handling async actions (pending, fulfilled, rejected).

const slice1 = createSlice({
  name: "slice1",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchedData.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchedData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(FetchedData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// FetchedData represents the type: "Coin/fetch"
// FetchedData.pending implies: "Coin/fetch/pending"
// FetchedData.fulfilled implies: "Coin/fetch/fulfilled"
// FetchedData.rejected implies: "Coin/fetch/rejected"

export { FetchedData };
export default slice1.reducer;
