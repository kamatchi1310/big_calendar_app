import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "../store/calendarSlice";

const localizer = momentLocalizer(moment);

const DisplayCalendar = () => {
  const listOfData = useSelector((state) => state.listOfData);
  const selectedDate = useSelector((state) => state.selectedDate);
  const dispatch = useDispatch();
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={listOfData}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default DisplayCalendar;
