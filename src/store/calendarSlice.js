import { createSlice } from "@reduxjs/toolkit";

// Dummy JSON data
const sampleData = {
  "01-09-2025": [{ user_1: 1 }, { user_2: 2 }, { user_3: 3 }, { user_4: 4 }],
  "02-09-2025": [{ user_1: 2 }, { user_2: 3 }, { user_3: 1 }, { user_4: 5 }],
  "03-09-2025": [{ user_1: 3 }, { user_2: 1 }, { user_3: 4 }, { user_4: 2 }],
};

const calendarSlice = createSlice({
  name: "big_calendar",
  initialState: {
    listOfData: sampleData,
    selectedDate: null,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
