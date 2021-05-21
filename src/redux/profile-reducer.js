import { profileAPI, usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USERS-PROFILE'
const SET_USER_STATUS = 'SET-USERS-STATUS'

let initialValue = {
  postsData: [
    { id: 1, text: 'Hi, how are you?', likesCount: 0 },
    { id: 2, text: 'It`s my first post', likesCount: 23 },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        text: action.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}

// Action Creators

export let addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export let setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

// Redux-Thunk

export let getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data))
    })
  }
}
export let getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data))
    })
  }
}
export let updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}

export default profileReducer
