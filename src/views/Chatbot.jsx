import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React, { useEffect, useState } from "react";
import ChatBot from "react-chatbot-kit";
import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import "react-chatbot-kit/build/main.css";
import "../styles/chatbot.css";
import "remixicon/fonts/remixicon.css";

const steps = [
    {
        id : 1,
        message: `안녕 나는 챗봇이야`,
        trigger: '1',
    },
    {
        id : 2,
        message: `안녕 나 오늘 그럭저럭함`,
        trigger: '1',
    },
    {
        id : 3,
        message: `그렇군요 다음의 서비스를 이용해볼까요?`,
        trigger: '2',
    },
    {
        id : 4,
        options: [
            { value: 1, label: '음악추천', trigger: '3' },
        ],
    },
    {
        id : 5,
        component: (
          <div>
              <a>돌아가기</a>
              <a>연결하기</a>
          </div>
        ),
    },
];


function Chatbot(props) {

    return (
        <div className="chatbot-home">

            <div className="chatbot-home-header">
                <Link to="/" className="chatbot-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="chatbot-content">
                <div className="chatbot-container">


                    <ChatBot className="chatbot-main"
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

}

export default withRouter(Chatbot);