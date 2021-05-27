import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, InputForm, TextareaForm } from '../../common/FormsControls/FormsControls'
import s from './ProfileInfo.module.css'
import errorStyle from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error ? <div className={errorStyle.commonError}>{error}</div> : null}
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full name</b>: {createField('Full name', 'fullName', [], InputForm)}
      </div>
      <div>
        <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], InputForm, { type: 'checkbox' })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField('My professional skills', 'lookingForAJobDescription', [], TextareaForm)}
      </div>
      <div>
        <b>About me</b>:{createField('About tMe', 'aboutMe', [], TextareaForm)}
      </div>
      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={s.contact} key={key}>
              <b>
                {key}: {createField('Full name', 'contacts.' + key, [], InputForm)}
              </b>
            </div>
          )
        })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm
