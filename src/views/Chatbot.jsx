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

function Chatbot(props) {

    return (
        <div className="chatbot-home">

            <div className="chatbot-home-header">
                <Link to="/" className="chatbot-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="chatbot-content">
                {/*<div className="chatbot-container">*/}
                {/*    */}





                {/*</div>*/}

                <ChatBot className="chatbot-container"
                         config={config}
                         messageParser={MessageParser}
                         actionProvider={ActionProvider}
                />
                <SideMenu />

            </div>
        </div>

    );

}

export default withRouter(Chatbot);