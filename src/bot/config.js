import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";





const config = {
    initialMessages: [
        createChatBotMessage(
            "언제든지 AI 루밍과 함께 대화하세요."
        ),
        createChatBotMessage(
            "오늘 하루는 어떠셨나요?",
            {
                withAvatar: true,
                delay: 500,
            }
        ),
        
    ],
    customComponents: {
        header: () => <Header />,
        botChatMessage: (props) => <ChatMessage {...props} bot />,
        userChatMessage: (props) => <ChatMessage {...props} />,
    }
};

export default config;