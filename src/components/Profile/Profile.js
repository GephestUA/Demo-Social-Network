import React from 'react'
import ProfileInfo from './Profileinfo/Profileinfo'
import MyPostContainer from './MyPosts/MyPostContainer'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPostContainer />
    </div>
  )
}

export default Profile
