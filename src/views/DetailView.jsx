import React,{ useState } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import SadIcon from "../assets/image/splash/sad-icon.png";
import NormalIcon from "../assets/image/splash/normal-icon.png";
import HappyIcon from "../assets/image/splash/happy-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import axios from "axios";
import ApexCharts from "react-apexcharts";


//상세페이지 컴포넌트
function DetailView() {
    // const{id} = useParams();
    const diaryId = sessionStorage.getItem("diaryId");
    console.log("diaryId",diaryId);
    console.log("checkdiaryId",diaryId);
    const [userName, set_name] = useState();
    const [profileImg, set_profileImg] = useState();
    const [diaryContent, set_diaryContent] = useState();
    const [feeling, set_feeling] = useState();
    const [createdDate, set_createdDate] = useState();


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
            })
    });

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
                            <div className="detail-container-row-first-thrid">
                                {createdDate[0] +"-" + createdDate[1] + "-" + createdDate[2] + " " + createdDate[3] + ":" + createdDate[4]}
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
                            <div className="detail-container-row-first-thrid">
                                {createdDate[0] +"-" + createdDate[1] + "-" + createdDate[2] + " " + createdDate[3] + ":" + createdDate[4]}
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
        console.log("BBcheckdiaryId",diaryId);
        sessionStorage.removeItem(diaryId);
        console.log("AAcheckdiaryId",sessionStorage.getItem(diaryId));
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="result-container">
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }

    //감정 3 - angry
    else if(feeling == 'ANGRY' ){ //angry
        console.log("BBcheckdiaryId",diaryId);
        sessionStorage.removeItem("diaryId");
        console.log("AAcheckdiaryId",diaryId);
        return (
            <div className="result-happy">
                <div className="result-happy-header"> {/*헤더*/}
                    <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                    <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                </div>
                <div className="home-content">
                    <div className="result-container">
                    </div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        );
    }
}

export default withRouter(DetailView);