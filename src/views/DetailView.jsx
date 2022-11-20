import React,{ useState } from "react";
import { useParams, withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import SadIcon from "../assets/image/splash/sad-icon.png";
import NormalIcon from "../assets/image/splash/normal-icon.png";
import HappyIcon from "../assets/image/splash/happy-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import Heart from "../assets/image/likes/like.png";
import axios from "axios";


//상세페이지 컴포넌트
function DetailView(){

    const { diaryId }= useParams();
    const userId = sessionStorage.getItem("userId");
    console.log("diaryId",diaryId);
    
    const [userName, set_name] = useState();
    const [profileImg, set_profileImg] = useState();
    const [diaryContent, set_diaryContent] = useState();
    const [feeling, set_feeling] = useState();
    const [createdDate, set_createdDate] = useState();
    const [likesCount, set_likes] = useState();

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/my-diary/${diaryId}/diary-detail`)
            .then((res) => {
                const data = res.data;
                console.log("data",data);
                set_name(data.userName);
                set_profileImg(data.profileImg);
                set_diaryContent(data.diaryContent);
                set_feeling(data.feeling);
                set_createdDate(data.createdDate);
                set_likes(data.likesCount);
                console.log("dlikeata",data.likesCount);
            })
    });

    // useState(() => {
    //     axios.post(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080//feed-diary/${diaryId}/like`)
    //         .then((res) => {
    //             const data = res.data;
    //         })
    // });

    if(feeling == 'HAPPY'){ 
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="detail-container">
                        <div className="detail-container-row">
                            <div className="detail-container-row-first">
                                <img src={HappyIcon} alt="Happy" style={{"width":"50px","hight":"50px"}}/>
                            </div>
                            <div className="detail-container-row-first-second">
                                {userName}
                            </div>
                            <div className="detail-container-row-first-date">
                                {createdDate[0] +"/" + createdDate[1] + "/" + createdDate[2] + " " + createdDate[3] + ":" + createdDate[4]}
                            </div>
                            <div className="detail-container-row-first-like">
                                <img src={Heart} alt="Heart" style={{"width":"50px","hight":"50px"}}/>
                                
                            </div>
                            <div className="detail-container-row-first-like-count">
                                {likesCount}
                            </div>
                        </div>
                        <div className="detail-happy">
                            <div className="detail-happy-font">
                                {diaryContent}
                            </div>
                        </div>
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    // 감정 1 - neutral
    else if(feeling == 'NORMAL'){ //neutral
        return (
            <div className="result-normal">
                <div className="result-normal-header"> {/*헤더*/}
                    <Link to="/" className="result-normal-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="detail-container">
                        <div className="detail-container-row">
                            <div className="detail-container-row-first">
                            <img src={NormalIcon} alt="Normal" style={{"width":"50px","hight":"50px"}}/>
                            </div>
                            <div className="detail-container-row-first-second">
                                {userName}
                            </div>
                            <div className="detail-container-row-first-date">
                                {createdDate[0] +"/" + createdDate[1] + "/" + createdDate[2] + " " + createdDate[3] + ":" + createdDate[4]}
                            </div>
                            <div className="detail-container-row-first-like">
                                <img src={Heart} alt="Heart" style={{"width":"50px","hight":"50px"}}/>
                                
                            </div>
                            <div className="detail-container-row-first-like-count">
                                {likesCount}
                            </div>
                        </div>
                        <div className="detail-normal">
                            <div className="detail-normal-font">
                                {diaryContent}
                            </div>
                        </div>
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    //감정 2 -sad 
    else if(feeling == 'SAD' ){ //sad
        return (
            <div className="result-sad">
                <div className="result-sad-header"> {/*헤더*/}
                    <Link to="/" className="result-sad-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="detail-container">
                        <div className="detail-container-row">
                            <div className="detail-container-row-first">
                            <img src={SadIcon} alt="Sad" style={{"width":"50px","hight":"50px"}}/>
                            </div>
                            <div className="detail-container-row-first-second">
                                {userName}
                            </div>
                            <div className="detail-container-row-first-date">
                                {createdDate[0] +"/" + createdDate[1] + "/" + createdDate[2] + " " + createdDate[3] + ":" + createdDate[4]}
                            </div>
                            <div className="detail-container-row-first-like">
                                <img src={Heart} alt="Heart" style={{"width":"50px","hight":"50px"}}/>
                                
                            </div>
                            <div className="detail-container-row-first-like-count">
                                {likesCount}
                            </div>
                        </div>
                        <div className="detail-sad">
                            <div className="detail-sad-font">
                                {diaryContent}
                            </div>
                        </div>
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    //감정 3 - angry
    else if(feeling == 'ANGRY' ){ //angry
        return (
            <div className="result-angry">
                <div className="result-angry-header"> {/*헤더*/}
                    <Link to="/" className="result-angry-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="detail-container">
                        <div className="detail-container-row">
                            <div className="detail-container-row-first">
                            <img src={AngryIcon} alt="Angry" style={{"width":"50px","hight":"50px"}}/>
                            </div>
                            <div className="detail-container-row-first-second">
                                {userName}
                            </div>
                        </div>
                        <div className="detail-angry">
                            <div className="detail-angry-font">
                                {diaryContent}
                            </div>
                        </div>
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }
}

export default withRouter(DetailView);