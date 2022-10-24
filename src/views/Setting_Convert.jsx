import React from "react";
import { withRouter, Link} from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";

function Setting_Convert(){
    return(
        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>


            <div className="home-content">
                <div className="home-container">
                    <div style={{fontFamily:"KyoboHand", fontSize:"30px"}}>회원 정보를 입력해주세요!</div>
                    <hr></hr><hr></hr>
                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>그루밍 무드에 오신 것을 환영합니다</div>
                    <hr></hr><hr></hr>
                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>
                        프로필 사진
                        <input type="image" id="profileImage" src={User} style={{"width":"200px","hight":"200px"}}></input>
                    </div>
                    <br></br>
                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>
                        닉네임
                        <input type="text" id="name" maxlength="8" size="20"></input>
                    </div>

                </div>
                    <SideMenu></SideMenu>
            </div>

            

        </div>
    );
}


export default withRouter(Setting_Convert);