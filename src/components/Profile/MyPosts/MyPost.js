import React from 'react'
import Post from './Post/Post'
import s from './MyPost.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { TextArea } from '../../common/FormsControls/FormsControls'

const MyPost = React.memo((props) => {
  let onAddPost = (value) => {
    props.addPost(value.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {props.postData.map((message) => {
          return <Post message={message.text} like={message.likesCount} key={message.id} />
        })}
      </div>
    </div>
  )
})

let maxLength = maxLengthCreator(30)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} name={'newPostText'} validate={[required, maxLength]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPost
