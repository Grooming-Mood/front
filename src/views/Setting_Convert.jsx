import React from "react";
import { withRouter, Link} from "react-router-dom";
import SideMenu from "./SideMenu";

function Setting_Convert(){
    return(
        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>


            <div className="home-content">
                <div className="setting-parent">
                    <div>여기서 프로필사진과 닉네임을 수정하세요.</div>
                </div>
                    <SideMenu></SideMenu>
            </div>

            

        </div>
    );
}


export default withRouter(Setting_Convert);