const SEND_MESSAGE = 'SEND-MESSAGE'

let initialValue = {
  dialogData: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Valera' },
  ],

  messageData: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'What is your name?' },
    { id: 3, text: 'You!' },
    { id: 4, text: 'You!' },
    { id: 5, text: 'You!' },
  ],
}
const dialogsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageText
      return {
        ...state,
        messageData: [...state.messageData, { id: 6, text: body }],
      }
    }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer
