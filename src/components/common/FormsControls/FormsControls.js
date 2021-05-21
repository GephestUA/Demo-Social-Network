import React from 'react'
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
