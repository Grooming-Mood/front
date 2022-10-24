import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import { addMonths, subMonths } from "date-fns";
import { RenderDays } from "../Calendar/RenderDays";
import { RenderCells } from "../Calendar/RenderCells";
import { CalendarHeader } from "../Calendar/CalendarHeader";

function Calender(props) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    return (
        <div className="calendar">
            <CalendarHeader
                currentMonth={ currentMonth }
                prevMonth={ prevMonth }
                nextMonth={ nextMonth }
            />
            <RenderDays/>
            <RenderCells
                currentMonth={ currentMonth }
                selectedDate={ selectedDate }
                onDateClick={ onDateClick }
            />
        </div>
    );
}

export default withRouter(Calender);