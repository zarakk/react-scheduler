import React, { useCallback, useMemo, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const { MONTH } = Views;

interface Event {
  start: Date;
  end: Date;
  title: string;
}
const TimeSlotWrapper = (props: any) => {
  return <div style={{ background: "red" }}>{props.children}</div>;
};

function Scheduler() {
  const slotPropGetter = useCallback(
    (date: Date) => ({
      className: "slotDefault",
      ...(moment(date).hour() < 8 && {
        style: {
          backgroundColor: "powderblue",
          color: "black",
        },
      }),
      ...(moment(date).hour() > 12 && {
        style: {
          backgroundColor: "darkgreen",
          color: "white",
        },
      }),
    }),
    []
  );

  // const defaultDate = useMemo(() => new Date(2023, 3, 13), []);

  // function Scheduler() {
  const [events, setEvents] = useState<Event[]>([
    {
      start: new Date(),
      end: moment().add(1, "days").toDate(),
      title: "Some event",
    },
    {
      start: new Date(),
      end: moment().add(2, "days").toDate(),
      title: "Other event",
    },
  ]);

  return (
    <div style={{ height: "1000px" }}>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        view={MONTH}
        onSelectEvent={(event: Event) => alert(event.title)}
        showMultiDayTimes={true}
        slotPropGetter={slotPropGetter}
      >
        <TimeSlotWrapper />
      </Calendar>
    </div>
  );
}

export default Scheduler;
