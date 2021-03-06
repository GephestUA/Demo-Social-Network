import * as axios from 'axios'

let instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': '511c73a6-602f-450c-8e18-b973c04579d7' },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn('Change method!!! This is old method')
    return profileAPI.getProfile(userId)
  },
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, { status })
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`/profile/photo`, formData)
  },
  saveProfile(profile) {
    return instance.put(`/profile`, profile)
  },
}

export const authAPI = {
  me() {
    return instance.get(`/auth/me`)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`/auth/login`, { email, password, rememberMe, captcha })
  },
  logout() {
    return instance.delete(`/auth/login`)
  },
}
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`)
  },
}
