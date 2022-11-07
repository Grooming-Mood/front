import React, { useState, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import { addMonths, subMonths } from "date-fns";
import { RenderDays } from "../Calendar/RenderDays";
import { RenderCells } from "../Calendar/RenderCells";
import { CalendarHeader } from "../Calendar/CalendarHeader";
import ApexCharts from "react-apexcharts";


function Chart(props){
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

        <div className="home">

            <div className="home-header">
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="calendar-content">
                <div className="calendar-container">
                    <div className="calendar">

                        <div>
                            <ApexCharts
                                type="bar"
                                series={ [
                                    { name: "저번주 감정 통계",
                                        data: [19, 26, 20, 9],
                                    },
                                    { name: "이번주 감정 통계",
                                        data: [30, 26, 34, 10],
                                    },
                                ]}
                                options={{
                                    chart : {
                                        height: 500,
                                        width: 500,
                                    },
                                    xaxis : {
                                        categories: [
                                        "HAPPY",
                                        "NORMAL",
                                        "SAD",
                                        "ANGRY"
                                        ],
                                    }
                                }}>
                            </ApexCharts>
                        </div>

                    </div>
                </div>
                <SideMenu></SideMenu>

            </div>
        </div>
    );
}

export default withRouter(Chart);