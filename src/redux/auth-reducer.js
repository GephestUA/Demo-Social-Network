import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_USER_DATA = 'set-user-data'
const GET_CAPTCHA_URL = 'get-captcha-url'

let initialValue = {
  id: null,
  email: null,
  login: null,
  isLogin: false,
  captchaUrl: null,
}

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}

const setAuthUserData = (id, email, login, isLogin) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isLogin },
})
const getCaptchaAction = (captchaUrl) => ({
  type: GET_CAPTCHA_URL,
  payload: { captchaUrl },
})

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaAction(captchaUrl))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
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
