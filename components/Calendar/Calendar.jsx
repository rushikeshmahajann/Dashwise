import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { useState, useEffect } from "react";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import SectionTitle from "../SectionTitle";
import Calendar from "../../icons/Calendar";

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventModal = createEventModalPlugin();

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Event 1",
        start: "2025-04-02 00:00",
        end: "2025-04-02 02:00",
      },
    ],
    plugins: [eventsService, eventModal, createDragAndDropPlugin()],
  });

  useEffect(() => {
    // get all events
    eventsService.getAll();
  }, []);

  return (
    <>
      <SectionTitle icon={<Calendar />} title={"Calendar"} subHeading={"Plan, Schedule, Succeed"} />
      <div className="relative mx-auto">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}

export default CalendarApp;
