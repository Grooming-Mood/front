import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/image/splash/all-icon.png";
import SideMenu from "./SideMenu";


function Home(props) {

    return (
        <div className="home">

            <div className="home-header">
                <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>GroomingMood</Link>
                <p style={{ color: "#fff" }}>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-container">
                <div className="home-logo">
                    <img src={Logo} alt={Logo}></img>
                </div>

                <div className="home-title">
                    Grooming Mood
                </div>

                <div className="home-sub">
                    <span style={{
                        fontSize: "25px",
                        src: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap",
                        color: "#060606"
                    }}>
                        당신의 감정을<br/>
                        어루만지는 AI 일기
                    </span>
                </div>
            </div>
            <SideMenu></SideMenu>
        </div>

    );
}

export default withRouter(Home);