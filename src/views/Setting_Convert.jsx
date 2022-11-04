import React, {useRef, useState}  from "react";
import { withRouter, Link} from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";



function Setting_Convert(){

    //사용자 닉네임 변경 (변경된 닉네임은 <newname> 에 저장됨)
    const [username, setUsername] = useState("세종");
    let [newname, setNewname] = useState("세종");

    const ChangeName = (e) => {
        setUsername(e.target.value);
    };

    const SaveName = (e) => {
        setNewname(username); 
    };

    //사용자 프로필사진 변경 (변경된 프사는 <newimage>에 저장됨)
    let [newimage, setNewimage] = useState(User);
    const fileInput = useRef(null)

    const onChange = (e) => {

        if (e.target.files[0]){
            setNewimage(e.target.files[0])}
        else{ 
            setNewimage(User)
            return}

        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState ===2 ){
                setNewimage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }








    //화면
    return(
        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>


            <div className="home-content">
                <div className="home-container">
                    <div style={{ fontSize:"30px"}}>회원 정보를 입력해주세요!</div>
                    <br></br><br></br>
                    <div style={{fontFamily:"KyoboHand", fontSize:"20px"}}>그루밍 무드에 오신 것을 환영합니다</div>
                    <br></br><br></br>



                    <img 
                        src={newimage} 
                        style={{"width":"200px","hight":"200px"}}
                        onClick = { ()=>{fileInput.current.click()}}
                    ></img>
                    <br></br><br></br>



                    <div style={{fontSize:"15px"}}>
                        프로필 사진
                        <input type="file" onChange={onChange} ref={fileInput} accept="image/*" name="profile_img" ></input>
                    </div>
                    <br></br>
                    
                    
                    


                    <div style={{fontSize:"15px"}}>
                        닉네임
                        <input type="text" name="name" value={username} onChange={ChangeName} maxLength="8" size="20"></input>
                        <input type="button" value="수정하기" onClick={SaveName}></input>
                    </div>


                    <div style={{fontFamily:"KyoboHand", fontSize:"30px"}}>{newname}님의 정보가 수정되었습니다.</div>


                    <div>
                        <button className="button"><span>저장</span></button>
                    </div>


                </div>
                    <SideMenu></SideMenu>
            </div>

            

        </div>
    );
}


export default withRouter(Setting_Convert);