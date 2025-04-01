import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";

import { useState, useEffect } from "react";
import { createViewWeek, createViewMonthGrid} from '@schedule-x/calendar'
import '@schedule-x/theme-default'


function Calendar() {
    const calendar = useCalendarApp({
        config: {
            views:[
                createViewWeek(),
                createViewMonthGrid(),
            ],
            events: [
                {
                    id:1,
                    title:"My new event",
                    start:'2025-06-06 00:00',
                    end: '2025-07-07 00:00'
                }
            ],
            seletDate: '2025-06-06'
        }
    })

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default Calendar;
