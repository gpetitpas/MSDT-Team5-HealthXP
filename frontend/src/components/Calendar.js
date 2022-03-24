import React from "react";

import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles

function Calendar() {
  return (
    <div className="Calendar">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="text-white">Calendar</h1>
            <Kalend
              events={[]}
              initialDate={new Date().toISOString()}
              hourHeight={60}
              initialView={CalendarView.WEEK}
              disabledViews={[CalendarView.DAY]}
              timeFormat={'24'}
              weekDayStart={'Monday'}
              calendarIDsHidden={['work']}
              language={'en'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

/*
Upgrade npm modules and try using this calendar npm package: https://reactjsexample.com/react-calendar-component-with-support-for-multiple-views-and-events/
Here's the github for the kalend npm package: https://github.com/nibdo/kalend
*/