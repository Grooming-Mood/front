import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../assets/image/logo.png";

function Home(props) {
    const logo_image = {
        width: '228px',
        height: '226px',
    }

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-logo">
                    <img src={Logo} style={logo_image}></img>
                </div>

                <div className="home-title">
                    <span style={{
                        fontSize: "30px",
                        fontFamily: "Noto Sans KR",
                        src: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap',
                        color: "#060606"
                    }}>
                        Grooming Mood
                    </span>
                </div>

                <div className="home-sub">
                    <span style={{
                        fontSize: "25px",
                        fontFamily:"NotoSansKR",
                        src: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap",
                        color: "#060606"
                    }}>
                        당신의 감정을<br />어루만지는 AI일기
                    </span>
                </div>

            </div>
        </div>
    );
}

export default withRouter(Home);