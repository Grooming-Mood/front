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
                            <p>오늘 세종님은 67% 확률로 화난 날입니다.<br/></p>
                            
                        </div>
                        <div className="result-container-left-row-third">
                            <div className="result-container-left-row-third-first">AI 루밍이의 분석결과<br/></div>
                            <span className="result-container-left-row-third-second-feel">ANGRY</span>
                            <span className="result-container-left-row-third-second-bar"><img src={Progressbar} alt="Progressbar" style={{"width":"120px","hight":"120px"}}/></span>
                            <span className="result-container-left-row-third-second-percent">67%</span>
                            <div className="result-container-left-row-third-face">세종님의 화난 표정이 기록되었어요.</div>
                            <div className="result-container-left-row-third-voice">세종님의 평온한 목소리가 기록되었어요.</div>
                        </div>
                    </div>
                    <div className="result-container-right">
                        <div className="result-container-right-row-first">
                            AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                        </div>
                        <div className="result-container-right-row-second">
                            <div className="result-container-right-row-second-date">
                                2022/12/24
                            </div>
                            <div className="result-container-right-row-second-content-angry">
                                <div className="result-container-right-row-second-content-angry-font">
                                    안녕
                                </div>
                            </div>
                        </div>
                        <div className="result-container-right-row-thrid">
                            <div className="result-container-right-row-thrid-select-button">
                                <button className="result-button">개인 피드에 저장하기</button>
                                <button className="result-button">공유 피드에 저장하기</button>
                            </div>
                        </div>
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