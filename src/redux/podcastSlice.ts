import { createSlice } from '@reduxjs/toolkit';

const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = podcastSlice.actions;

export default podcastSlice.reducer;
