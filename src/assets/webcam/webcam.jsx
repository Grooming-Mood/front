import React, { useEffect } from "react";



function WebCam(props){
    console.log("************렌더링********");

    const constraints = {audio: false, video: true};
    const videoOutput = document.getElementById("video-output");

    const startBtn = document.getElementById("start-btn"); //녹화시작 버튼
    const finishBtn = document.getElementById("finish-btn"); //녹화 종료 버튼
    const downloadBtn = document.getElementById("download-btn"); //녹화 다운로드 버튼
    
    let mediaRecorder = null; //생성자
    let recordedMediaUrl = null; //녹화영상 url

    //녹화 준비
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream){
            console.log(mediaStream);
            console.log("videoOutput:", videoOutput);
            console.log("startBtn: ", startBtn);
            // MediaStream을 HTMLVideoElement의 source로 설정
            videoOutput.srcObject = mediaStream;
            console.log("srcObject:",videoOutput.srcObject);
            // metadata가 로드될 때 실행되는 이벤트
            videoOutput.onloadedmetadata = function() {
            // HTMLVideoElement로 카메라의 화면을 출력하기 시작
                videoOutput.play();
            };
        
        // 녹화 시작 버튼 클릭 시 빌생하는 이벤트 핸들러 등록
        startBtn.addEventListener("click", function(){
            let mediaData = [];

            // 1.MediaStream을 매개변수로 MediaRecorder 생성자를 호출
            mediaRecorder = new MediaRecorder(mediaStream,
            {mimeType: "video/webm; codecs=vp9"});

            // 2. 전달받는 데이터를 처리하는 이벤트 핸들러 등록
            mediaRecorder.ondataavailable = function(event){
                if(event.data && event.data.size > 0){
                    mediaData.push(event.data);
                }
            }
         
        
            // 3. 녹화 중지 이벤트 핸들러 등록
            mediaRecorder.onstop = function(){
                const blob = new Blob(mediaData, {type: "video/webm"});
                recordedMediaUrl = window.URL.createObjectURL(blob);
            }

            // 4. 녹화 시작
            mediaRecorder.start();
            console.log("녹화 시작");
        })

        // 녹화 종료 버튼 클릭 시 빌생하는 이벤트 핸들러 등록
        finishBtn.addEventListener("click", function(){
            if(mediaRecorder){
                // 5. 녹화 중지
                mediaRecorder.stop();
                //mediaRecorder = null;
                console.log("녹화 중지");
            }
        })

        //다운로드 버튼
        downloadBtn.addEventListener("click", function () {
            console.log("다운로드")
            if( recordedMediaUrl == null){
                console.log("녹화 영상이 없음");
            }
            if (recordedMediaUrl != null) {
                console.log("녹화 영상이 있음");
                const link = document.createElement("a");
                document.body.appendChild(link);
                // 녹화된 영상의 URL을 href 속성으로 설정
                link.href = recordedMediaUrl;
                // 저장할 파일명 설정
                console.log(link.href)
                link.download = "video.mp4";
                link.click();
                document.body.removeChild(link);
                mediaRecorder = null; //여기로 옮겼음
            }
        });


    })
    return(
        <div>
            
        </div>
    );
}

export default WebCam;