import React, { useLayoutEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";
import UserUpdate from "../assets/image/user/user_update.png";
import Logout from "../assets/image/user/logout.png";



function Result(props) {

    return (

        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="home-container">
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Result);