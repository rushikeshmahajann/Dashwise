import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
  viewMonthGrid
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
    defaultView: viewMonthGrid.name,
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Project Kickoff",
        start: "2025-04-02 10:00",
        end: "2025-04-02 11:30",
      },
      {
        id: "2",
        title: "Client Demo",
        start: "2025-04-12 14:00",
        end: "2025-04-12 15:00",
      },
      {
        id: "3",
        title: "Team Standup",
        start: "2025-05-06 09:00",
        end: "2025-05-06 09:30",
      },
      {
        id: "4",
        title: "Design Review",
        start: "2025-05-18 13:00",
        end: "2025-05-18 14:00",
      },
      {
        id: "5",
        title: "Mid-Year Planning",
        start: "2025-06-10 11:00",
        end: "2025-06-10 12:30",
      },
      {
        id: "6",
        title: "Code Freeze Deadline",
        start: "2025-06-29 17:00",
        end: "2025-06-29 17:30",
      },
      {
        id: "7",
        title: "Quarterly Review",
        start: "2025-07-15 16:00",
        end: "2025-07-15 17:00",
      },
    ],
    plugins: [eventsService, eventModal, createDragAndDropPlugin()],
  });

  useEffect(() => {
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
