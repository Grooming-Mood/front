import React from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";

function Setting(props) {

    return (

        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="setting-parent">
                    <div className="setting-child">
                        <div style={{"font-size": "30px"}}>
                            <p>마이 페이지</p>
                        </div>
                        <img src={User} alt={User} style={{"width":"200px","hight":"200px"}}></img>
                        <div>
                            <p>김세종 님</p>
                        </div>
                    </div>
                    <div className="setting-child">
                        <div>
                            <p>회원정보 수정</p>
                        </div>
                        <div>
                            <p>로그아웃</p>
                        </div>
                        <div>
                            <p>회원탈퇴</p>
                        </div>
                    </div>
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Setting);