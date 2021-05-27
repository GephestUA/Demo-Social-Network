import React from 'react'
import ProfileInfo from './Profileinfo/Profileinfo'
import MyPostContainer from './MyPosts/MyPostContainer'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        saveProfile={props.saveProfile}
      />
      <MyPostContainer />
    </div>
  )
}

export default Profile
