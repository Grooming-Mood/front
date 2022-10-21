import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/image/splash/all-icon.png";
import SideMenu from "./SideMenu";
import Button from "./Button";

function Setting(props) {

    return (

        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="home-container">
                    <div style = "float: right">
                        마이페이지
                    </div>
                    <div style = "float: left">
                        마이페이지
                    </div>

                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Setting);