import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/image/splash/all-icon.png";
import SideMenu from "./SideMenu";
import Button from "./Button";
import WebCam from "../webcam/webcam";

function Record(props) {

    return (

        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="record-left"> {/*안내문*/}
                        <div className="home-logo">
                            <img src={Logo} alt={Logo}></img>
                        </div>
                        <div className="record-title">
                            오늘의 일기를 기록해주세요!<br/>
                        </div>
                        <div className="record-sub">
                            Grooming Mood가 당신의 감정과 일기를<br/> 자동으로 작성해줍니다.<br/>
                        </div>
                        <div className="record-sub">
                            <ul>
                                <li>PC 내 카메라와 마이크 접근을 허용해주세요.</li>
                                <li>카메라는 정면을 응시해주세요.</li>
                                <li>어두운 곳에서의 촬영은 피해주세요.</li>
                                <li>1분 이내로 촬영해주세요.</li>
                                <li>기록 후에는 기록 완료 버튼을 눌러주세요.</li>
                            </ul>
                        </div>
                            

                </div>




                <div className="record-right"> {/*웹캠*/}
                        <div>
                            <WebCam></WebCam>
                        </div>
                </div>




                <SideMenu></SideMenu> {/*사이드 메뉴*/}

            </div>  


        </div>

    );
}

export default withRouter(Record);