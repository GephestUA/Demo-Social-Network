import React from 'react'
import { Field } from 'redux-form'
import s from './FormsControls.module.css'

export const TextArea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <textarea {...input} {...props} />
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  )
}
export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <input {...input} {...props} />
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  )
}

const FormControl = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const TextareaForm = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const InputForm = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
  return (
    <div>
      <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} /> {text}
    </div>
  )
}
