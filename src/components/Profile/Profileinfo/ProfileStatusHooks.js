import React, { useEffect, useState } from 'react'

const ProfileStatusHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.state)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activeEditMode = () => {
    setEditMode(true)
  }
  const deactivatedEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      <div>
        {editMode ? (
          <div>
            <input value={status} onBlur={deactivatedEditMode} autoFocus={true} onChange={onStatusChange}></input>
          </div>
        ) : (
          <div>
            <span onDoubleClick={activeEditMode}>{props.status || '-----'}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileStatusHooks
