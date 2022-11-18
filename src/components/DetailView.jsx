import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



//상세페이지 컴포넌트
function DetailView() {
    const{id} = useParams();
    


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
                                <p>{userName}님의 기쁜 날이 기록되었어요.<br/></p>
                                
                            </div>
                            <div className="result-container-left-row-third">
                                <div className="result-container-left-row-third-first">AI 루밍이의 분석결과</div>
                                <div className="result-container-left-row-third-face">{userName}님의 행복한 표정이 기록되었어요.</div>
                                <div className="result-container-left-row-third-voice">{userName}님의 행복한 목소리가 기록되었어요.</div>
                            </div>
                        </div>
                        <div className="result-container-right">
                            <div className="result-container-right-row-first">
                                AI 루밍이가 작성한<br/> 일기 입니다.<br/>
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


export default withRouter(DetailView);