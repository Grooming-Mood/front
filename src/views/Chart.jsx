import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import ApexCharts from "react-apexcharts";


const dummyList = [{
    "lastweek" : [19, 26, 20, 9]
}, {
    "todayweek": [30, 26, 34, 10]
}];


function Chart(props){

    // useEffect(() => {
    //     axios.get(`${origin.express}/project/issue/list/${project_id}`)
    //         .then((res) => {
    //             console.log(res);
    //             set_issues(res.data.list);
    //         })
    // }, [])

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
                                        data: dummyList[0].lastweek,
                                    },
                                    { name: "이번주 감정 통계",
                                        data: dummyList[1].todayweek,
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