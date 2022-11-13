import React, { useLayoutEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";
import UserUpdate from "../assets/image/user/user_update.png";
import Logout from "../assets/image/user/logout.png";

function Login(props) {

    //아이디, 패스워드
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const handleInputId = (e) => { setInputId(e.target.value);};
    const handleInputPw = (e) => { setInputPw(e.target.value);};

    //로그인 Axios 통신
    const onClickLogin = () => {

        console.log("login버튼 클릭");
        console.log("아이디:", inputId);
        console.log("비밀번호:",inputPw);

        axios
            .post("http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/user/login",{
                email: inputId,
                password: inputPw,
            })
            .then( (res)=> {
                console.log(res);
                console.log("res.data.userid ::", res.data.email);
                console.log("res.data.msg ::", res.data.password);

                if(res.data.email === undefined){ alert("입력하신 ID가 존재하지 않습니다.");}
                else if(res.data.email === null) { alert("입력하신 비밀번호가 일치하지 않습니다.");}
                else if(res.data.email === inputId) {
                    alert("로그인 성공");
                    sessionStorage.setItem("user_id", inputId);
                    sessionStorage.setItem("name",res.data.name);
                    sessionStorage.setItem("profileImg",res.data.profileImg);
                }

                //작업 완료 되면 페이지 이동
                //document.location.href = "/my-page";
            })
            .catch();
    };
    



    //화면
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
                            <p>로그인</p>
                        </div>
                        <img src={User} alt={User} style={{"width":"200px","hight":"200px"}}></img>
                        <div>
                            <p>김세종 님</p>
                        </div>
                    </div>
                    <div className="setting-right">

                        <input
                            type="email"
                            placeholder="이메일을 입력하세요"
                            name="input_id"
                            value={inputId}
                            onChange={handleInputId}
                        />

                        <input
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            name="input_pw"
                            value={inputPw}
                            onChange={handleInputPw}
                        />
                         
                        <button onClick={onClickLogin}>로그인하기</button>


                    </div>
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Login);