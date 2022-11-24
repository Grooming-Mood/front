import React,{ useState } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import SadIcon from "../assets/image/splash/sad-icon.png";
import NormalIcon from "../assets/image/splash/normal-icon.png";
import HappyIcon from "../assets/image/splash/happy-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import axios from "axios";
import ApexCharts from "react-apexcharts";



//게이지bar 컴포넌트
function Gagebar(props){
    console.log(sessionStorage.getItem('Face Prob'));
    console.log(sessionStorage.getItem('Voice Prob'));


    return(
        <div>
            <ApexCharts 
                type="radialBar"
                height={250}
                series={
                    [sessionStorage.getItem('Face Prob'), sessionStorage.getItem('Voice Prob')]
                }             
                options={{
                    chart: {
                        height : 100,
                        width: 100,
                        type: "radialBar"
                    },
                    plotOptions: {
                        radialBar: {
                            offsetY: 0,
                            startAngle: 0,
                            endAngle: 270,
                            hollow: {
                                margin: 5,
                                size: '20%',
                                background: 'transparent',
                                image : undefined,
                            },
                            dataLabels:{
                                name: {
                                    show: false,
                                },
                                value: {
                                    show: false,
                                }
                            }
                        }
                    },
                    colors: ['#39539E', '#1ab7ea'],
                    labels: ['Face', 'Voice'],
                    legend: {
                        show: true,
                        floating: true,
                        fontSize: '13px',
                        position: 'left',
                        offsetX: 160,
                        offsetY: 15,
                        labels: { useSeriesColors: true },
                        markers: {size:0},
                        itemMargin: { vertical: 3},
                        formatter: function(seriesName, opts) {
                            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]+"%"
                        },
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: { legend: {show : false}}
                    }]
                }}>              
            </ApexCharts>
        </div>

    );
}


function Result (){
    const userId = sessionStorage.getItem("userId");
    console.log("userID",userId);
    const [userName, set_name] = useState();
    
    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/user/${userId}/info`)
            .then((res) => {
                set_name(res.data.name);
            })
    });
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var date = dt.getDate();
    var nowTime = year+'/'+month+'/'+date

    // const dictation = sessionStorage.getItem("dictation"); //사용자의 음성인식된 일기 내용
    // const emotion = sessionStorage.getItem("Face Emotion"); //사용자의 감정 인덱스 (0: 행복, 1: 노말, 2: 슬픔, 3: 화남)
    // const prob = sessionStorage.getItem("Face Prob"); //사용자의 감정 확률
    const dictation = "공개 일기 버튼 테스트 용도" //사용자의 음성인식된 일기 내용
    const emotion = 1
    const prob = 70

    // const emotion_type = "NORMAL"
    // console.log(emotion, prob, emotion_type);

    //일기 저장 통신
    const onClickPublic = async() => {
        // const formData = new FormData()

        console.log("emotion", emotion);
        
        if (emotion == 0){
            var emotion_type = "HAPPY";
        }
        else if (emotion == 1){
            var emotion_type = "NORMAL";
        }
        else if (emotion == 2){
            var emotion_type = "SAD";
        }
        else if (emotion == 3){
            var emotion_type = "ANGRY";
        }
        console.log("emotion_type", emotion_type);

        let data = {
            diaryContent: dictation,
            feeling: emotion_type,
            isPublic: Boolean(true)
        };
        console.log("공개 저장");
        console.log("일기 내용:", dictation);
        axios.post(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/my-diary/${userId}`,
        data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=> {
            console.log("res출력");
            // res.setHeader('Access-Control-Allow-origin', '*');
            console.log(res);
            console.log("성공");

            if (emotion == 0)
                document.location.href = "/recommendation-happy";
            else if(emotion == 1)
                document.location.href = "/recommendation-normal";
            else if(emotion == 2)
                document.location.href = "/recommendation-sad";
            else if(emotion == 3)
                document.location.href = "/recommendation-angry";
        });
    };

    //일기 저장 통신
    const onClickPrivate = async() => {
        // const formData = new FormData()

        console.log("emotion", emotion);
        
        if (emotion == 0){
            var emotion_type = "HAPPY";
        }
        else if (emotion == 1){
            var emotion_type = "NORMAL";
        }
        else if (emotion == 2){
            var emotion_type = "SAD";
        }
        else if (emotion == 3){
            var emotion_type = "ANGRY";
        }
        console.log("emotion_type", emotion_type);

        let data = {
            diaryContent: dictation,
            feeling: emotion_type,
            isPublic: Boolean(false)
        };
        console.log("비밀 저장");
        console.log("일기 내용:", dictation);
        axios.post(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/my-diary/${userId}`,
        data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=> {
            console.log("res출력");
            // res.setHeader('Access-Control-Allow-origin', '*');
            console.log(res);
            console.log("성공");

            if (emotion == 0)
                document.location.href = "/recommendation-happy";
            else if(emotion == 1)
                document.location.href = "/recommendation-normal";
            else if(emotion == 2)
                document.location.href = "/recommendation-sad";
            else if(emotion == 3) 
                document.location.href = "/recommendation-angry";
        });

    };
        
        //감정 0 - happy
        if(emotion==0){ 
            return (
                <div className="result-happy">
                    <div className="result-happy-header"> {/*헤더*/}
                        <Link to="/" className="result-happy-header-link">GroomingMood</Link>
                        <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                    </div>
                    <div className="home-content">
                        <div className="result-container">
                            <div className="result-container-left">
                                <div className="result-container-left-row-first">
                                    <div className="result-container-left-row-first-left">
                                        AI 루밍이가 분석한<br/> 오늘의 일기입니다!<br/>
                                    </div>
                                    <div className="result-container-left-row-first-right">
                                        <img src={HappyIcon} alt="Happy" style={{"width":"150px","hight":"150px"}}/>
                                        <br/>
                                    </div>
                                </div>
                                <div className="result-container-left-row-second">
                                    <p>오늘 {userName}님은 {prob}% 확률로 기쁜 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과</div>
                                    <div className="result-container-left-row-third-face">{userName}님의 행복한 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">{userName}님의 행복한 목소리가 기록되었어요.</div>
                                    <Gagebar></Gagebar>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        {nowTime}
                                    </div>
                                    <div className="result-container-right-row-second-content-happy">
                                        <div className="result-container-right-row-second-content-happy-font">
                                            {dictation}
                                        </div>
                                    </div>
                                </div>
                                <div className="result-container-right-row-thrid">
                                    <div className="result-container-right-row-thrid-select">
                                        저장 방식을 선택해주세요!
                                    </div>
                                    <div className="result-container-right-row-thrid-select-button">
                                        <button className="result-button" onClick={onClickPrivate}>개인 피드에 저장하기</button>
                                        <button className="result-button" onClick={onClickPublic}>공유 피드에 저장하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideMenu></SideMenu>
                    </div>
                </div>
            );
        }

        // 감정 1 - neutral
        else if(emotion==1){ //neutral
            return (
                <div className="result-normal">
                    <div className="result-normal-header"> {/*헤더*/}
                        <Link to="/" className="result-normal-header-link">GroomingMood</Link>
                        <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                    </div>
                    <div className="home-content">
                        <div className="result-container">
                            <div className="result-container-left">
                                <div className="result-container-left-row-first">
                                    <div className="result-container-left-row-first-left">
                                        AI 루밍이가 분석한<br/> 오늘의 일기입니다!<br/>
                                    </div>
                                    <div className="result-container-left-row-first-right">
                                        <img src={NormalIcon} alt="Normal" style={{"width":"150px","hight":"150px"}}/>
                                        <br/>
                                    </div>
                                </div>
                                <div className="result-container-left-row-second">
                                    <p>오늘 {userName}님은 {prob}% 확률로 그저그런 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과</div>
                                    <div className="result-container-left-row-third-face">{userName}님의 평온한 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">{userName}님의 평온한 목소리가 기록되었어요.</div>
                                    <Gagebar></Gagebar>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        {nowTime}
                                    </div>
                                    <div className="result-container-right-row-second-content-normal">
                                        <div className="result-container-right-row-second-content-normal-font">
                                            {dictation}
                                        </div>
                                    </div>
                                </div>
                                <div className="result-container-right-row-thrid">
                                    <div className="result-container-right-row-thrid-select">
                                        저장 방식을 선택해주세요!
                                    </div>
                                    <div className="result-container-right-row-thrid-select-button">
                                        <button className="result-button" onClick={onClickPrivate}>개인 피드에 저장하기</button>
                                        <button className="result-button" onClick={onClickPublic}>공유 피드에 저장하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideMenu></SideMenu>
                    </div>
                </div>
            );
        }

        //감정 2 -sad 
        else if(emotion==2){ //sad
            return (
                <div className="result-sad">
                    <div className="result-sad-header"> {/*헤더*/}
                        <Link to="/" className="result-sad-header-link">GroomingMood</Link>
                        <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                    </div>
                    <div className="home-content">
                        <div className="result-container">
                            <div className="result-container-left">
                                <div className="result-container-left-row-first">
                                    <div className="result-container-left-row-first-left">
                                        AI 루밍이가 분석한<br/> 오늘의 일기입니다!<br/>
                                    </div>
                                    <div className="result-container-left-row-first-right">
                                        <img src={SadIcon} alt="Sad" style={{"width":"150px","hight":"150px"}}/>
                                        <br/>
                                    </div>
                                </div>
                                <div className="result-container-left-row-second">
                                    <p>오늘 {userName}님은 {prob}% 확률로 우울한 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과</div>
                                    <div className="result-container-left-row-third-face">{userName}님의 슬픈 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">{userName}님의 슬픈 목소리가 기록되었어요.</div>
                                    <Gagebar></Gagebar>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        {nowTime}
                                    </div>
                                    <div className="result-container-right-row-second-content-sad">
                                        <div className="result-container-right-row-second-content-sad-font">
                                            {dictation}
                                        </div>
                                    </div>
                                </div>
                                <div className="result-container-right-row-thrid">
                                    <div className="result-container-right-row-thrid-select">
                                        저장 방식을 선택해주세요!
                                    </div>
                                    <div className="result-container-right-row-thrid-select-button">
                                        <button className="result-button" onClick={onClickPrivate}>개인 피드에 저장하기</button>
                                        <button className="result-button" onClick={onClickPublic}>공유 피드에 저장하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideMenu></SideMenu>
                    </div>
                </div>
            );
        }

        //감정 3 - angry
        else if(emotion==3){ //angry
            return (
                <div className="result-angry">
                    <div className="result-angry-header"> {/*헤더*/}
                        <Link to="/" className="result-angry-header-link">GroomingMood</Link>
                        <p>당신의 감정을<br/>어루만지는 AI 일기</p>
                    </div>
                    <div className="home-content">
                        <div className="result-container">
                            <div className="result-container-left">
                                <div className="result-container-left-row-first">
                                    <div className="result-container-left-row-first-left">
                                        AI 루밍이가 분석한<br/> 오늘의 일기입니다!<br/>
                                    </div>
                                    <div className="result-container-left-row-first-right">
                                        <img src={AngryIcon} alt="Angry" style={{"width":"150px","hight":"150px"}}/>
                                        <br/>
                                    </div>
                                </div>
                                <div className="result-container-left-row-second">
                                    <p>오늘 {userName}님은 {prob}% 확률로 분노한 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과</div>
                                    <div className="result-container-left-row-third-face">{userName}님의 화난 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">{userName}님의 화난 목소리가 기록되었어요.</div>
                                    <Gagebar></Gagebar>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        {nowTime}
                                    </div>
                                    <div className="result-container-right-row-second-content-angry">
                                        <div className="result-container-right-row-second-content-angry-font">
                                            {dictation}
                                        </div>
                                    </div>
                                </div>
                                <div className="result-container-right-row-thrid">
                                    <div className="result-container-right-row-thrid-select">
                                        저장 방식을 선택해주세요!
                                    </div>
                                    <div className="result-container-right-row-thrid-select-button">
                                        <button className="result-button" onClick={onClickPrivate}>개인 피드에 저장하기</button>
                                        <button className="result-button" onClick={onClickPublic}>공유 피드에 저장하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideMenu></SideMenu>
                    </div>
                </div>
            );
        }
        
    }
// }

export default withRouter(Result);