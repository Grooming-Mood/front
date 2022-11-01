import React, { useLayoutEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";
import UserUpdate from "../assets/image/user/user_update.png";
import Logout from "../assets/image/user/logout.png";



function Setting(props) {

    return (

        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="setting-parent">
                    <div className="setting-left">
                        <div style={{"font-size": "30px"}}>
                            <p>마이 페이지</p>
                        </div>
                        <img src={User} alt={User} style={{"width":"200px","hight":"200px"}}></img>
                        <div>
                            <p>김세종 님</p>
                        </div>
                    </div>
                    <div className="setting-right">
                        <div>
                            <div>
                                &nbsp;&nbsp;
                                <img src={UserUpdate} alt={UserUpdate} style={{"width":"30px","hight":"30px"}}></img>
                                <Link to="/setting_convert">&nbsp;&nbsp;회원 정보 수정</Link>
                            </div>
                        </div>
                        <div>
                            <p>
                                &nbsp;&nbsp;
                                <img src={Logout} alt={Logout} style={{"width":"30px","hight":"30px"}}></img>
                                &nbsp;&nbsp;로그아웃
                            </p>
                        </div>
                        <div>
                            <div>
                                &nbsp;&nbsp;
                                <img src={Logout} alt={Logout} style={{"width":"30px","hight":"30px"}}></img>
                                &nbsp;&nbsp;회원탈퇴
                            </div>
                        </div>
                    </div>
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Setting);