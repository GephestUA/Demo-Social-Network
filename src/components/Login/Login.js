import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../utils/validators/validators'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error, captcha }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          component={Input}
          validate={[required]}
          type={'password'}
          autoComplete={'off'}
        />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
      </div>
      {captcha && <img src={captcha} />}
      {captcha && createField('Symbols from image', 'captcha', [required], Input, {})}
      {error ? <div className={s.commonError}>{error}</div> : null}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isLogin) return <Redirect to="/profile" />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login)
