import React, {useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import SideMenu from "./SideMenu";
import User from "../assets/image/splash/all-icon.png";


//로그인 컴포넌트 css
const loginStyleTextArea = {
    alignContent: "center",
    borderRadius: "22px",
    marginBottom: "35px",
    width: "300px",
    height: "64px",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)"
};

const loginStyleTextInput = {
    marginTop: "1.2rem",
    fontFamily: "Montserrat regular",
    fontSize: "15px",
    border: "none",
    width: "80%"

}

const loginBtn = {
    marginTop: "28px",
    width: "165px",
    height: "60px",
    borderRadius: "30px",
    background: "#7D8186",
    border: "none",
    fontFamily: 'KyoboHand',
    fontSize: "20px",
    color: "#FFFFFF",
    // boxShadow: "0 4px 8px 0 rgba(255, 204, 229, 0.7), 0 6px 20px 0 rgba(255, 204, 229, 0.9)",
    cursor: "pointer"
}

function Login(props) {

    //아이디, 패스워드
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const handleInputId = (e) => { setInputId(e.target.value);};
    const handleInputPw = (e) => { setInputPw(e.target.value);};

    //로그인 Axios 통신
    const onClickLogin = async() => {

        console.log("login버튼 클릭");
        console.log("아이디:", inputId);
        console.log("비밀번호:",inputPw);

        let data = JSON.stringify({
            email: inputId,
            password: inputPw
        });

        axios.post("http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/user/login",
        data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=> {
            console.log("res출력");
            // res.setHeader('Access-Control-Allow-origin', '*');
            // // console.log("설정 성공");
            console.log(res);
            console.log("로그인 성공");
            sessionStorage.setItem("userId",res.data.id)

            //작업 완료 되면 페이지 이동
            document.location.href = "/record";
        });
    };
    

    //화면
    return (
        <div className="home">
            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="home-content">
                <div className="login-parent">
                    <div className="login-left">
                        <img src={User} alt={User} style={{"width":"200px","hight":"200px"}}></img>
                    </div>
                    <div className="login-right">
                        <div className="login-center">
                            <div style={loginStyleTextArea}>
                                <input
                                    style={loginStyleTextInput}
                                    type="email"
                                    placeholder="이메일을 입력하세요"
                                    name="input_id"
                                    value={inputId}
                                    onChange={handleInputId}
                                />
                            </div>
                            <div style={loginStyleTextArea}>
                                <input
                                    style={loginStyleTextInput}
                                    type="password"
                                    placeholder="비밀번호를 입력하세요"
                                    name="input_pw"
                                    value={inputPw}
                                    onChange={handleInputPw}
                                />
                            </div>
                            <div className="login-button-center">
                            <button style={loginBtn} onClick={onClickLogin}>로그인하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );
}

export default withRouter(Login);