import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import {setAngryAmount, setHappyAmount, setNormalAmount, setSadAmount} from "../utils/function";


function Chart(props){
    const [lastWeekData, set_lastWeekData] = useState([]);
    const [thisWeekData, set_thisWeekData] = useState([]);
    const [lastTotalCount, set_lastTotalCount] = useState(0);
    const [thisTotalCount, set_thisTotalCount] = useState(0);
    const [lastresultweek, set_lastresultweek] = useState([]);
    const [todayresultweek, set_todayresultweek] = useState([]);
    const [userId, set_userId] = useState(sessionStorage.getItem("userId"));

    const lastweek = [];

    const todayweek = [];

    useEffect(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feeling-history/last-week/userId/${userId}`)
            .then((res) => {

                const lists = res.data.feelingStatisticInfoList;

                lastweek.push(setHappyAmount(lists));
                lastweek.push(setNormalAmount(lists));
                lastweek.push(setSadAmount(lists));
                lastweek.push(setAngryAmount(lists));

                set_lastresultweek(lastweek);
            })

        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feeling-history/today-week/userId/${userId}`)
            .then((res) => {
                set_thisWeekData(res.data.feelingStatisticInfoList);

                const today_lists = res.data.feelingStatisticInfoList;

                todayweek.push(setHappyAmount(today_lists));
                todayweek.push(setNormalAmount(today_lists));
                todayweek.push(setSadAmount(today_lists));
                todayweek.push(setAngryAmount(today_lists));

                set_todayresultweek(todayweek);
            })

        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feeling-history/last-week/total-count/userId/${userId}`)
            .then((res) => {
                set_lastTotalCount(res.data);
            })

        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feeling-history/today-week/total-count/userId/${userId}`)
            .then((res) => {
                set_thisTotalCount(res.data);
            })
    }, [])

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
                                        data: lastresultweek,
                                    },
                                    { name: "이번주 감정 통계",
                                        data: todayresultweek,
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