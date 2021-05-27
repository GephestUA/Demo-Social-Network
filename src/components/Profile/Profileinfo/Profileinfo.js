import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileDataFormReduxForm from './ProfileDataForm'
import s from './ProfileInfo.module.css'
import ProfileStatusHooks from './ProfileStatusHooks'

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false))
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={
            profile.photos.large ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU'
          }
        ></img>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusHooks status={status} updateUserStatus={updateUserStatus} />
        {editMode ? (
          <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
        ) : (
          <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />
        )}
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={goToEditMode}> Edit</button>}</div>
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  )
}

export default ProfileInfo
