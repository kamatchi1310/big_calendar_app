import { createSlice } from "@reduxjs/toolkit";

// Dummy JSON data
const sampleData = {
  "01-09-2025": [{ user_1: 1 }, { user_2: 2 }, { user_3: 3 }, { user_4: 4 }],
  "02-09-2025": [{ user_1: 2 }, { user_2: 3 }, { user_3: 1 }, { user_4: 5 }],
  "03-09-2025": [{ user_1: 3 }, { user_2: 1 }, { user_3: 4 }, { user_4: 2 }],
  "10-09-2025": [{ user_1: 3 }, { user_2: 1 }, { user_3: 4 }, { user_4: 2 }],
  "13-09-2025": [{ user_1: 3 }, { user_2: 1 }, { user_3: 4 }, { user_4: 2 }],
  "24-09-2025": [{ user_1: 3 }, { user_2: 1 }, { user_3: 4 }, { user_4: 2 }],
};

const formatDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const listOfData = Object.entries(sampleData).map(([date, records], index) => ({
  id: index + 1,
  title: `Created At ${date}`,
  start: formatDate(date),
  end: formatDate(date),
  data: records,
}));

const calendarSlice = createSlice({
  name: "big_calendar",
  initialState: {
    listOfData,
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
