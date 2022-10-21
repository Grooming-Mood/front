import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/image/splash/all-icon.png";
import SideMenu from "./SideMenu";
import Button from "./Button";

function Record(props) {

    return (

        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="record-left">

                        <div className="record-title">
                            오늘의 일기를 기록해주세요!
                        </div>

                        <div className="record-sub">
                            <span>
                                Grooming Mood가 당신의 감정과 일기를 자동으로 작성해줍니다.
                            </span>
                        </div>
                </div>

                <div className="record-right">

                        <div className="record-title">
                            <WebCam></WebCam>
                        </div>
                        
                </div>

                <SideMenu></SideMenu>

            </div>  


        </div>

    );
}

export default withRouter(Record);