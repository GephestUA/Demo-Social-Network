import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, InputForm, TextareaForm } from '../../common/FormsControls/FormsControls'

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
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
      {/* <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div> */}
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm
