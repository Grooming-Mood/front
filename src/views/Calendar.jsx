import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import { addMonths, subMonths } from "date-fns";

function Calender(props) {
    const [ currentMonth, setCurrentMonth ] = useState(new Date());
    const [ selectedDate, setSelectedDate ] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return (
        <div className="calendar">
            <CalendarHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays/>
            <div className="calendar-body"></div>
        </div>
    );
}

export default withRouter(Calender);