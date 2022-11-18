import { createChatBotMessage } from "react-chatbot-kit";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";

const config = {
    initialMessages: [
        createChatBotMessage(
            "언제든지 AI 루밍과 함께 대화하세요."
        ),
    ],
    customComponents: {
        header: () => <Header />,
        botChatMessage: (props) => <ChatMessage {...props} bot />,
        userChatMessage: (props) => <ChatMessage {...props} />,
    },
};

export default config;