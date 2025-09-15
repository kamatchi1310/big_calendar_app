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

  const handleSelectSlot = (slotInfo) => {
    const date = listOfData.find(
      (e) => e.start.toDateString() === slotInfo.start.toDateString()
    );

    if (date) {
      dispatch(setSelectedDate(date));
      setPopupOpen(true);
    } else {
      setPopupOpen(false);
      alert("No data found for the selected date.");
    }
  };

  const eventStyleGetter = (data) => {
    const style = {
      backgroundColor:
        selectedDate && selectedDate.id === data.id ? "#5dbb94" : "#ffae94",
      borderRadius: "5px",
      opacity: 0.9,
      color: "white",
      border: "0px",
      display: "block",
    };
    return { style };
  };

  const dayPropGetter = (date) => {
    const formatted = moment(date).format("DD-MM-YYYY");
    const SelectedDateInFormat = selectedDate
      ? moment(selectedDate.start).format("DD-MM-YYYY")
      : null;
    if (formatted === SelectedDateInFormat) {
      return {
        style: {
          backgroundColor: "#D0F0C0",
          border: "1px solid #4F7942",
          borderRadius: "6px",
        },
      };
    }
    return {};
  };

  const onClose = () => {
    setPopupOpen(false);
    dispatch(setSelectedDate(null));
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
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        dayPropGetter={dayPropGetter}
        onNavigate={onClose}
        onView={onClose}
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
