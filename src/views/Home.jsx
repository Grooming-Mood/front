import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/image/splash/all-icon.png";
import SideMenu from "./SideMenu";
import Button from "./Button";

function Home(props) {

    return (



        <div className="home">

            <div className="home-header">
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="home-container">
                    <div className="home-logo">
                        <img src={Logo} alt={Logo}></img>
                    </div>
                    {/*<Button children={"회원가입 하러 가기"}></Button>*/}
                    <div className="home-title">
                        Grooming Mood
                    </div>

                    <div className="home-sub">
                        <span>
                            당신의 감정을<br/>
                            어루만지는 AI 일기
                        </span>
                    </div>
                </div>
                <SideMenu></SideMenu>
            </div>

            
        </div>

    );
}

export default withRouter(Home);