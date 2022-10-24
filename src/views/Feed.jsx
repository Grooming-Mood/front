import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React from "react";

function Feed(props) {
    return (
        <div className="home">

            <div className="home-header">
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="feed-content">
                <div className="feed-container">
                    <div className="feelingHistory-container">
                        <h2 className="feelingHistory-title">
                            내 감정 통계
                        </h2>
                        <span className="feelingHistory-description">
                            최근 일주일동안 화가 많았어요
                        </span>
                    </div>

                    <div className="diary-container">
                        <h2 className="diary-title">
                            나의 감정일기
                        </h2>
                    </div>

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

}

export default withRouter(Feed);