import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotelsList: [],
  searchValues: {
    ski_site: null,
    from_date: null,
    to_date: null,
    group_size: null,
  },
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setSearchValues: (state, { payload }) => {
      state.searchValues = payload;
    },
    setHotels: (state, { payload }) => {
      state.hotelsList = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHotels, setSearchValues } = hotelsSlice.actions;

export default hotelsSlice.reducer;
