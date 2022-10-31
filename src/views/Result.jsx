import React, { useLayoutEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import SadIcon from "../assets/image/splash/sad-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import ChatbotIcon from "../assets/image/splash/chatbot-icon.png";
import SettingIcon from "../assets/image/splash/setting-icon.png";
import Progressbar from "../assets/image/result/progressbar.png";



function Result(props) {

    /**
     *  결과가 화난 감정 일 경우
     */
    return (

        <div className="result-angry">

            <div className="result-angry-header"> {/*헤더*/}
                <Link to="/" className="result-angry-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="home-content">
                <div className="result-container">
                    <div className="result-container-left">
                        <div className="result-container-left-row-first">
                            <div className="result-container-left-row-first-left">
                                AI 루밍이가 분석한<br/> 오늘의 일기입니다!<br/>
                            </div>
                            <div className="result-container-left-row-first-right">
                                <img src={AngryIcon} alt="Angry" style={{"width":"150px","hight":"150px"}}/>
                                <br/>
                            </div>
                        </div>
                        <div className="result-container-left-row-second">
                            <p>오늘 세종님은 <br/>67% 확률로 화난 날입니다.<br/></p>
                            
                        </div>
                        <div className="result-container-left-row-third">
                            AI 루밍이의 분석결과<br/>
                            ANGRY
                            <img src={Progressbar} alt="Progressbar" style={{"width":"100px","hight":"100px"}}/>
                            67%
                        </div>
                    </div>
                    <div className="result-container-right">
                        
                    </div>
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );

    /**
     *  결과가 평범 감정 일 경우
     */
    return (

        <div className="result-normal">

            <div className="result-normal-header"> {/*헤더*/}
                <Link to="/" className="result-normal-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="result-normal-content">
                <div className="result-normal-container">
                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

    /**
     *  결과가 행복 감정 일 경우
     */
    return (

        <div className="result-happy">

            <div className="result-happy-header"> {/*헤더*/}
                <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="result-happy-content">
                <div className="result-happy-container">
                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

    /**
     *  결과가 슬픔 감정 일 경우
     */
    return (

        <div className="result-sad">

            <div className="result-sad-header"> {/*헤더*/}
                <Link to="/" className="result-sad-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="result-sad-content">
                <div className="result-sad-container">
                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );
}

export default withRouter(Result);