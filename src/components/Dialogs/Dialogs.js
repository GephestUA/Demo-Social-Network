import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { TextArea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../utils/validators/validators'

const Dialogs = (props) => {
  let state = props.dialogsPage

  const addNewMessage = (value) => {
    props.sendMessage(value.newMessageText)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogData.map((dialog) => {
          return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
        })}
      </div>
      <div className={s.messages}>
        <div>
          {state.messageData.map((message) => {
            return <Message message={message.text} key={message.id} />
          })}
        </div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

let maxLength = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          placeholder={'Enter Your Message'}
          name={'newMessageText'}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddNewMessageText' })(AddMessageForm)

export default Dialogs
