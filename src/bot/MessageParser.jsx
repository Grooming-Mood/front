import axios from "axios";

class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse = (message) => {        
        console.log(message);
         let data = {
             userChatMessage: message
         };
         axios.post(`http://127.0.0.1:5000/chatbot`,
         data,{headers:{"Content-Type" : "application/json"}})
         .then((res)=> {
             console.log("res출력");
             console.log(res);
             sessionStorage.setItem('ChatbotRes', res.data); //챗봇의 응답 저장
         });

        return this.actionProvider.handleFlaskAPI();
        
    };
    
}

export default MessageParser;