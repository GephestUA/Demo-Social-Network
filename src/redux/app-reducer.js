import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED_SUCCESS = 'set-initialized'

let initialValue = {
  initialized: false,
}

const appReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state
  }
}

export const initializedSuccess = () => ({
  type: SET_INITIALIZED_SUCCESS,
})

export const initializeApp = () => {
  return (dispatch) => {
    dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()))
  }
}

export default appReducer
