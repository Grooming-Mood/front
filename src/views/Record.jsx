import React, { useEffect,useState, useRef } from 'react';
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import {useReactMediaRecorder} from "react-media-recorder";


//미리보기 영상 컴포넌트
const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
    if (!stream) {
      return null;
    }
    return <video ref={videoRef} width={500} height={500} autoPlay controls />;
  };
  



//화면
function Record(props) {

    const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({video:true, audio:true});

    const [isRecording, setIsRecording] = useState(false);
    const handleStartRecording = () => {
        setIsRecording(true);
        startRecording();
    };
    const handleStopRecording = () => {
        setIsRecording(false);
        stopRecording();
    };



    return (
        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="record-left">

                        <div className="record-title">
                            오늘의 일기를 기록해주세요!
                        </div>
                        <hr></hr><hr></hr><hr></hr>
                        <div className="record-sub">
                            <span>
                                Grooming Mood가 당신의 감정과 일기를 자동으로 작성해줍니다.
                            </span>
                        </div>
                        <hr></hr><hr></hr><hr></hr>
                        <div className="record-sub">
                            <span>
                                영상 기록 시 주의사항<hr></hr>
                            </span>
                            <span>
                                <ul>
                                    <li>
                                        PC 내 카메라와 마이크 접근을 허용해주세요.
                                    </li>
                                    <li>
                                        카메라는 정면을 응시해주세요.
                                    </li>
                                    <li>
                                        어두운 곳에서의 촬영은 피해주세요.
                                    </li>
                                    <li>
                                        1분 미만으로 촬영해주세요.
                                    </li>
                                </ul>
                            </span>
                        </div>



                </div>
                
                <div className="record-right">
                    <div >
                        <div>
                            <button onClick={() => handleStartRecording()}>일기 기록 시작</button>
                            <button onClick={() => handleStopRecording()}>일기 기록 종료</button>
                            <p>현재 영상 녹화 상태: {status}</p>
                            {isRecording && <VideoPreview stream={previewStream} width={500} height={500} />}
                            {!isRecording && (<video id="recorded" src={mediaBlobUrl} width={500} height={500} controls autoPlay loop />)}
                        </div>
                    </div>
                    <div>
                        <button>나의 감정 분석하기</button>
                    </div>
                </div>

                <SideMenu></SideMenu>

            </div>  


        </div>
        

    );
}

export default withRouter(Record);