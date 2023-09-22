import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PodcastState {
  isLoading: boolean;
  searchQuery: string;
}

const initialState: PodcastState = {
  isLoading: false,
  searchQuery: '',
};

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setLoading, setSearchQuery } = podcastSlice.actions;

export default podcastSlice.reducer;
