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



                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

}

export default withRouter(Feed);