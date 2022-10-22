import React, { useState } from 'react';
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import WebCam from "../assets/webcam/webcam";

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

                    <div>{/*여기를 매번 렌더링 해줘야 할듯 여기를 바꾸면 잘 작동*/}
                        <video id="video-output"></video>
                        <button id="start-btn">일기 기록 시작</button>
                        <button id="finish-btn">일기 기록 종료</button>
                        <button id="download-btn">녹화 영상 다운링딩동</button>
                        <WebCam></WebCam>
                    </div>
                        
                </div>

                <SideMenu></SideMenu>

            </div>  


        </div>

    );
}

export default withRouter(Record);