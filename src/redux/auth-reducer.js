import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_USER_DATA = 'set-user-data'

let initialValue = {
  id: null,
  email: null,
  login: null,
  isLogin: false,
}

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}

export const setAuthUserData = (id, email, login, isLogin) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isLogin },
})

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    dispatch(
      stopSubmit('login', {
        _error: response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error!',
      })
    )
  }
}
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer
