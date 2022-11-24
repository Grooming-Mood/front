class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleFlaskAPI = () => {
        console.log("대답 진입");
        const messages= this.createChatbotMessage(
            sessionStorage.getItem('ChatbotRes'),
            { withAvatar: true }
        );
        this.addMessageToBotState(messages);
    };

    addMessageToBotState = (messages, newState) => {
        if (Array.isArray(messages)) {
          this.setState((state) => ({
            ...state,
            ...newState,
            messages: [...state.messages, ...messages],
          }));
        } else {
          this.setState((state) => ({
            ...state,
            ...newState,
            messages: [...state.messages, messages],
          }));
        }
      };
}

export default ActionProvider;