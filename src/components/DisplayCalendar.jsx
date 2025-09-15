import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { setSelectedDate } from "../store/calendarSlice";
import DetailsPopup from "./DetailsPopup";

const localizer = momentLocalizer(moment);

const DisplayCalendar = () => {
  const { listOfData, selectedDate } = useSelector(
    (state) => state.big_calendar
  );
  const dispatch = useDispatch();
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSelectDate = (date) => {
    dispatch(setSelectedDate(date));
    setPopupOpen(true);
  };

  const handleSelectSlot = (slotInfo) => {
    const date = listOfData.find(
      (e) => e.start.toDateString() === slotInfo.start.toDateString()
    );
    setPopupOpen(true);
    if (date) {
      dispatch(setSelectedDate(date));
    } else {
      dispatch(setSelectedDate(null));
    }
  };

  const eventStyleGetter = (data) => {
    const style = {
      backgroundColor:
        selectedDate && selectedDate.id === data.id ? "#3174ad" : "#f56c6c",
      borderRadius: "5px",
      opacity: 0.9,
      color: "white",
      border: "0px",
      display: "block",
    };
    return { style };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={listOfData}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 500, margin: "50px" }}
        // onSelectEvent={handleSelectDate}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
      />

      {popupOpen && selectedDate && (
        <DetailsPopup
          details={selectedDate}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default DisplayCalendar;
