import React,{ useState } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import SadIcon from "../assets/image/splash/sad-icon.png";
import NormalIcon from "../assets/image/splash/normal-icon.png";
import HappyIcon from "../assets/image/splash/happy-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import axios from "axios";
import ApexCharts from "react-apexcharts";


//상세페이지 컴포넌트
function DetailView() {
    // const{id} = useParams();
    const emotion = 0;

    if(emotion==0){ 
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="result-container">
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    // 감정 1 - neutral
    else if(emotion==1){ //neutral
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="result-container">
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    //감정 2 -sad 
    else if(emotion==2){ //sad
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="result-container">
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    //감정 3 - angry
    else if(emotion==3){ //angry
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="result-container">
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }
  }


export default withRouter(DetailView);