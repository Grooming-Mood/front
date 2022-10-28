import React, { useLayoutEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";
import UserUpdate from "../assets/image/user/user_update.png";
import Logout from "../assets/image/user/logout.png";



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
            <div className="result-angry-content">
                <div className="result-angry-container">
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Result);