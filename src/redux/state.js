import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: "Hi, how are you?", likesCount: 0 },
        { id: 2, text: "It`s my first post", likesCount: 23 },
      ],
      newPostText: "kamasutra",
    },

    dialogsPage: {
      dialogData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Valera" },
      ],

      messageData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "What is your name?" },
        { id: 3, text: "You!" },
        { id: 4, text: "You!" },
        { id: 5, text: "You!" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log(1);
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  },
};


export default store;

// props.setUsers([{
    //   id: 1,
    //   userPhoto:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU",
    //   follow: true,
    //   fullName: "Dima",
    //   status: "I am a boss",
    //   location: {
    //     country: "Belarus",
    //     city: "Minsk",
    //   }
    // },
    // {
    //   id: 2,
    //   userPhoto:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU",
    //   follow: false,
    //   fullName: "Sasha",
    //   status: "I am a boss",
    //   location: {
    //     country: "Russia",
    //     city: "Moscow",
    //   }
    // },
    // {
    //   id: 3,
    //   userPhoto:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU",
    //   follow: true,
    //   fullName: "Vladimir",
    //   status: "I am a boss",
    //   location: {
    //     country: "Ukraine",
    //     city: "Odessa",
    //   }
    // },])
