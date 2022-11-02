import React, { useEffect,useState, useRef } from 'react';
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import {useReactMediaRecorder} from "react-media-recorder";
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
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


//음성인식 컴포넌트
const Dictaphone = () =>{
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return(
        <div>
            <p>마이크 상태: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening({continuous: true, language: 'ko'})}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p> 
        </div>
    );
    
};

///////////////////////////////////////////////////////////////////////////////////////////////////////


//화면
function Record(props) {

    const [videoFilePath, setVideoFilePath] = useState(null); //업로드 받은 파일
    const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({video:true, audio:true});
    const [isRecording, setIsRecording] = useState(false);



    const handleStartRecording = () => {
        setIsRecording(true);
        startRecording();
        console.log("BlobUrl은:", mediaBlobUrl);
    };
    const handleStopRecording = () => {
        setIsRecording(false);
        
        stopRecording();
        
    };

    
    //영상 분석 요청 버튼 클릭 이벤트
    //업로드 받은 파일 경로 저장
    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
        console.log("handleVideoUpload 파일 저장 : ", videoFilePath);

    };

    //Flask api 요청 (******현재 오류남....)
    const loadFlaskapi = (event) => {
        let formData = new FormData();

        formData.append("file",videoFilePath); // 분석할 동영상
        for (let key of formData.keys()){
            console.log(key, ":", formData.get(key));
        }

        const options= {
            method:"post",
            url: "http://127.0.0.1:5000/predict_face",
            data: formData,
            headers: {"Content-Type" : "multipart/form-data"}
        }
        
        axios(options)
            .then(response => console.log(response));
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
                            <div className="record-sub-warn-title">
                                <span>
                                    영상 기록 시 주의사항<hr></hr>
                                </span>
                                <span className="record-sub-warn-content">
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
                                    <button className="button" onClick={() => handleStartRecording()}>일기 기록 시작</button>
                                    <button className="button" onClick={() => handleStopRecording()}>일기 기록 종료</button>
                                </div>
                                <div className="record-status">현재 영상 녹화 상태: {status}</div>
                                {isRecording && <VideoPreview stream={previewStream} width={500} height={500} />}
                                {!isRecording && (<video id="recorded" src={mediaBlobUrl} width={500} height={500} controls autoPlay loop />)}
                                <p>녹화 영상 url = {mediaBlobUrl}</p>
                            </div>
                        </div>


                        <form action="http://127.0.0.1:5000/predict_face" method='POST' encType='multipart/form-data'>
                            <input type="file" name="file" onChange={handleVideoUpload}></input>
                            <button type="submit">
                                <span>👩‍💻</span>
                                <span>오늘의 일기 분석하기 url자체가 이동</span>
                            </button>
                        </form>
                        <br></br>



                        <div>
                            <form onSubmit={loadFlaskapi}>
                                <input type="file" name="file" onChange={handleVideoUpload}></input>
                                <button type="submit">
                                    <span>여기를 눌러 분석하세요. flask테스트 오류</span>
                                </button>
                            </form>
                        </div>





                        <div>
                            <Link to="/result">
                                <div className="button-status">
                                <button className="button">
                                    <span>👩‍💻</span>
                                    <span>오늘의 일기 분석하기</span>
                                </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <SideMenu></SideMenu>

            </div>  

        </div>
        

    );
}

export default withRouter(Record);