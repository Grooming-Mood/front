import React, {useRef, useState}  from "react";
import { withRouter, Link} from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";



function Setting_Convert(){

    //사용자 닉네임 변경 (변경된 닉네임은 <newname> 에 저장됨)
    const [username, setUsername] = useState("세종");
    let [newname, Setnewname] = useState("세종");

    const ChangeName = (e) => {
        setUsername(e.target.value);
    };

    const SaveName = (e) => {
        Setnewname(username); 
    };

    //사용자 프로필사진 변경







    //화면
    return(
        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>


            <div className="home-content">
                <div className="home-container">
                    <div style={{fontFamily:"KyoboHand", fontSize:"40px"}}>회원 정보를 입력해주세요!</div>
                    <br></br><br></br>
                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>그루밍 무드에 오신 것을 환영합니다</div>
                    <br></br><br></br>



                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>
                        프로필 사진
                        <input type="file" accept="image/*" id="profileImage" ></input>
                    </div>
                    <br></br>



                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>
                        닉네임
                        <input type="text" name="name" value={username} onChange={ChangeName} maxLength="8" size="20"></input>
                        <input type="button" value="수정하기" onClick={SaveName}></input>
                    </div>


                    <div style={{fontFamily:"KyoboHand", fontSize:"30px"}}>{newname}님의 정보가 수정되었습니다.</div>

                </div>
                    <SideMenu></SideMenu>
            </div>

            

        </div>
    );
}


export default withRouter(Setting_Convert);