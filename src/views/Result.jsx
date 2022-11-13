import React, { useLayoutEffect } from "react";
import { withRouter, Link , useLocation} from "react-router-dom";
import SideMenu from "./SideMenu";
import SadIcon from "../assets/image/splash/sad-icon.png";
import NormalIcon from "../assets/image/splash/normal-icon.png";
import HappyIcon from "../assets/image/splash/happy-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import Progressbar from "../assets/image/result/progressbar.png";
import axios from "axios";

// async function postPulicDiary({userId}) {
//     try {
//       //응답 성공 
//     const response = await axios.post(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/​my-diary​/${userId}`,{
//         //보내고자 하는 데이터 
//         diaryContent: "오늘의 공개",
//         feeling: "ANGRY",
//         isPublic: "True"
//     });
//     console.log(response);
//     } catch (error) {
//     //응답 실패
//     console.error(error);
//     }
// }

class Result extends React.Component {
    
    render(){
        const userId = 3;
        const dictation = this.props.location.state.data.dictation; //사용자의 음성인식된 일기 내용

        const emotion = this.props.location.state.emotion.Emotion; //사용자의 감정인식된 감정

        const onSubmit = async (e) => {
            e.preventDefault();
            e.persist();
        
            let files = e.target.profile_files.files;
            let formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }
        
            let dataSet = {
                diaryContent: "일기 내용",
                feeling: "ANGRY",
                isPublic:true,
            };
        
            formData.append("data", JSON.stringify(dataSet));
        
            const postSurvey = await axios({
                method: "POST",
                url: `http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/​my-diary​/${userId}`,
                mode: "cors",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            });
        
            console.log(postSurvey);
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
                                    <p>오늘 세종님은 67% 확률로 행복한 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과<br/></div>
                                    <span className="result-container-left-row-third-second-feel">HAPPY</span>
                                    <span className="result-container-left-row-third-second-bar"><img src={Progressbar} alt="Progressbar" style={{"width":"120px","hight":"120px"}}/></span>
                                    <span className="result-container-left-row-third-second-percent">67%</span>
                                    <div className="result-container-left-row-third-face">세종님의 행복한 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">세종님의 평온한 목소리가 기록되었어요.</div>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        2022/12/24
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
                                        <button className="result-button">개인 피드에 저장하기</button>
                                        <button className="result-button">공유 피드에 저장하기</button>
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
                                    <p>오늘 세종님은 67% 확률로 그저그런 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과<br/></div>
                                    <span className="result-container-left-row-third-second-feel">NORMAL</span>
                                    <span className="result-container-left-row-third-second-bar"><img src={Progressbar} alt="Progressbar" style={{"width":"120px","hight":"120px"}}/></span>
                                    <span className="result-container-left-row-third-second-percent">67%</span>
                                    <div className="result-container-left-row-third-face">세종님의 그저그런 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">세종님의 평온한 목소리가 기록되었어요.</div>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        2022/12/24
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
                                        <button className="result-button">개인 피드에 저장하기</button>
                                        <button className="result-button">공유 피드에 저장하기</button>
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
                                    <p>오늘 세종님은 67% 확률로 슬픈 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과<br/></div>
                                    <span className="result-container-left-row-third-second-feel">SAD</span>
                                    <span className="result-container-left-row-third-second-bar"><img src={Progressbar} alt="Progressbar" style={{"width":"120px","hight":"120px"}}/></span>
                                    <span className="result-container-left-row-third-second-percent">67%</span>
                                    <div className="result-container-left-row-third-face">세종님의 슬픈 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">세종님의 슬픈 목소리가 기록되었어요.</div>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        2022/12/24
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
                                        <button className="result-button">개인 피드에 저장하기</button>
                                        <button className="result-button">공유 피드에 저장하기</button>
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
                                    <p>오늘 세종님은 67% 확률로 화난 날입니다.<br/></p>
                                    
                                </div>
                                <div className="result-container-left-row-third">
                                    <div className="result-container-left-row-third-first">AI 루밍이의 분석결과<br/></div>
                                    <span className="result-container-left-row-third-second-feel">ANGRY</span>
                                    <span className="result-container-left-row-third-second-bar"><img src={Progressbar} alt="Progressbar" style={{"width":"120px","hight":"120px"}}/></span>
                                    <span className="result-container-left-row-third-second-percent">67%</span>
                                    <div className="result-container-left-row-third-face">세종님의 화난 표정이 기록되었어요.</div>
                                    <div className="result-container-left-row-third-voice">세종님의 평온한 목소리가 기록되었어요.</div>
                                </div>
                            </div>
                            <div className="result-container-right">
                                <div className="result-container-right-row-first">
                                    AI 루밍이가 작성한<br/> 오늘의 일기 입니다.<br/>
                                </div>
                                <div className="result-container-right-row-second">
                                    <div className="result-container-right-row-second-date">
                                        2022/12/24
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
                                        <button className="result-button">개인 피드에 저장하기</button>
                                        <button className="result-button">공유 피드에 저장하기</button>
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
}

export default withRouter(Result);