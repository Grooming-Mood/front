import { createChatBotMessage } from "react-chatbot-kit";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";

const config = {
    initialMessages: [
        createChatBotMessage(
            "안녕하세요! 궁금한 내용을 입력해주세요."
        ),
    ],
    customComponents: {
        header: () => <Header />,
        botChatMessage: (props) => <ChatMessage {...props} bot />,
        userChatMessage: (props) => <ChatMessage {...props} />,
    },
};

export default config;