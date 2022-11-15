import React, {useRef, useState}  from "react";
import { withRouter, Link} from "react-router-dom";
import SideMenu from "./SideMenu";
import User from "../assets/image/user/user.png";
import axios from "axios";

//프로필 이미지 둥근모양 css
const profileSytle = {
    width: "200px",
    height: "200px",
    borderRadius: "70%",
    objectFit: "cover"
  };






function Setting_Convert(){


    // 유저 정보 불러오기
    const userId = sessionStorage.getItem("userId");
    console.log("userID",userId);
    const [userName, set_name] = useState(); //기존 유저 닉네임

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/user/${userId}/info`)
            .then((res) => {
                set_name(res.data.name);
                console.log("유저:", res.data.name);
            })
    });


    //사용자 닉네임 변경 (변경된 닉네임은 <newname> 에 저장됨)
    const [newname, setNewname] = useState(userName);

    const ChangeName = (e) => {
        set_name(e.target.value);
    };

    const SaveName = (e) => {
        setNewname(userName);
    };



    //사용자 프로필사진 변경 (변경된 프사는 <newimage>에 저장됨)
    let [newimage, setNewimage] = useState(User);
    const fileInput = useRef(null);

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



    //사용자의 변경된 정보 저장하기
    const saveAll = () => {

        let data = JSON.stringify({
            name: userName
        });   
        axios.post(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080//user/${userId}/info`,
        data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=> {
            res.setHeader('Access-Control-Allow-origin', '*');
            console.log(res);
            console.log("닉네임 변경 성공");
        });

        
        const formData = new FormData();
        formData.append("file", newimage); 

        const res = axios.post(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080//user/${userId}/info`
        , formData, {
            headers:{
                "Content-Type" : `multipart/form-data;`,
            }
        }).then((res)=>{
            console.log("프로필사진 변경 성공");
            console.log(res);
        });
            
    };





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
                    <div style={{fontSize:"20px"}}>{userName}님, 그루밍 무드에 오신 것을 환영합니다</div>
                    <br></br><br></br>



                    <img 
                        src={newimage} 
                        style={profileSytle}
                        onClick = { ()=>{fileInput.current.click()}}
                    ></img>
                    <br></br><br></br>



                    <div style={{fontSize:"14px"}}>
                        ⚙️ 프로필 사진을 클릭하여 변경하세요.
                        <input type="file" hidden onChange={onChange} ref={fileInput} accept="image/*" name="profile_img" di></input>
                    </div>
                    <br></br>
                    
                    
                    


                    <div style={{fontSize:"15px"}}>
                        닉네임&nbsp;&nbsp;
                        <input type="text" name="name" value={userName} onChange={ChangeName} maxLength="8" size="20"></input>
                        <input type="button" value="수정하기" onClick={SaveName}></input>
                        <br></br><br></br>
                    </div>


                    <div style={{fontSize:"20px"}}>🥳 {newname}님의 정보가 수정되었습니다.</div>
                    <br></br><br></br>


                    <button onClick={saveAll}>
                        저장
                    </button>


                </div>
                    <SideMenu></SideMenu>
            </div>

            

        </div>
    );
}


export default withRouter(Setting_Convert);