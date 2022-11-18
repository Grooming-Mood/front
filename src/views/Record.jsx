import React, { useEffect,useState, useRef } from 'react';
import { withRouter, Link, useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import {useReactMediaRecorder} from "react-media-recorder";
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { rest } from 'lodash';



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




///////////////////////////////////////////////////////////////////////////////////////////////////////


//화면
function Record(props) {


    const [videoFilePath, setVideoFilePath] = useState(null); //업로드 받은 파일
    const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({video:true, audio:true});
    const [isRecording, setIsRecording] = useState(false);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();



    const handleStartRecording = () => {
        setIsRecording(true);
        startRecording();
        console.log("BlobUrl은:", mediaBlobUrl);
    };
    const handleStopRecording = () => {
        setIsRecording(false);
        stopRecording();
        sessionStorage.setItem("dictation", transcript); //음성인식된 대본 저장
        console.log(sessionStorage.getItem("dictation"));
        
    };



    //음성인식 컴포넌트
    const Dictaphone = () =>{

        if (!browserSupportsSpeechRecognition) {
            return <span>Browser doesn't support speech recognition.</span>;
        }

        return(
            <div>
                <p>mic: {listening ? 'on' : 'off'}</p>
                <p>{transcript}</p>
                <button onClick={resetTranscript}>reset</button>

            </div>
        );
        
    };



    
    //업로드 받은 파일 경로 저장
    const handleVideoUpload = (event) => {
        setVideoFilePath(event.target.files[0]);
        console.log("handleVideoUpload 파일 저장 : ", event.target.files[0]);

    };



    //감정분석 Flask api 요청
    const loadFlaskapi = async() => {
        
        const formData = new FormData();
        formData.append("file",videoFilePath); // 분석할 동영상

        const res = axios.post("http://127.0.0.1:5000/recog_emotion", formData, {
            headers:{
                "Content-Type" : `multipart/form-data;`,
            }
        }).then(function(res){
            if(res.status === 200){
                console.log("감정 분석 완료");
                console.log(res.data);

                sessionStorage.setItem("Face Emotion", res.data['Face Emotion']);
                sessionStorage.setItem("Face Prob", (res.data['Face Prob']*100).toFixed(1));
                sessionStorage.setItem("Voice Emotion", res.data['Voice Emotion']);
                sessionStorage.setItem("Voice Prob", (res.data['Voice Prob']*100).toFixed(1));

                console.log(sessionStorage.getItem('Face Emotion'));
                console.log(sessionStorage.getItem('Voice Emotion'));

            };
        });
        
    };
    











    ///////////////////////////////////화면
    return (
        <div className="home">

            <div className="home-header"> {/*헤더*/}
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="home-content">
                <div className="record-container">
                    <div className="record-left">

                            <div className="record-title">
                                일기를 기록해주세요!
                            </div>
                            <hr></hr>
                            <div className="record-sub">
                                <span>
                                    루밍이가 당신의 감정과 일기를 자동으로 완성해줍니다.
                                </span>
                            </div>
                            <hr></hr>
                            <div className="record-sub-warn-content">
                                <span>
                                🚨 영상 기록 시 주의사항<hr></hr>
                                </span>
                                <span>
                                    <ul>
                                        <li>
                                            PC 카메라/마이크 접근 허용
                                        </li>
                                        <li>
                                            카메라의 정면 응시
                                        </li>
                                        <li>
                                            어두운 곳 지양
                                        </li>
                                        <li>
                                            1분 미만의 촬영
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div className="record-left-stt-box">
                                <Dictaphone></Dictaphone>
                            </div>



                    </div>
                    
                    <div className="record-right">
                        <div >
                            <div>
                                <div className="button-status">
                                    <button className="button" onClick={ () => {
                                        handleStartRecording()
                                        SpeechRecognition.startListening({continuous: true, language: 'ko'})
                                    }}>일기 기록 시작</button>
                                    <button className="button" onClick={ () => {
                                        handleStopRecording()
                                        SpeechRecognition.stopListening()
                                    }}>일기 기록 종료</button>
                                </div>
                                {isRecording && <VideoPreview stream={previewStream} width={800} height={500} />}
                                {!isRecording && (<video id="recorded" src={mediaBlobUrl} width={800} height={500} controls autoPlay loop />)}
                                <p> {mediaBlobUrl}</p>
                            </div>
                        </div>


                        <div>
                            <input type="file" name="file" onChange={handleVideoUpload}></input>
                            <button type="button" onClick={loadFlaskapi}>
                                    <span>영상 업로드</span>
                            </button>
                        </div>


                        <div>
                            <Link to={{
                                pathname: "/result"
                            }}>
                                <div className="button-status">
                                    <button className="button">
                                        <span>👩‍💻</span>
                                        <span>오늘의 일기 분석하기</span>
                                    </button>
                                </div>
                            </Link>
                        </div>

                        <p></p>


                        

                    </div>
                </div>

                <SideMenu></SideMenu>

            </div>  

        </div>
        

    );
}

export default withRouter(Record);