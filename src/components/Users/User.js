import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './users.module.css'

const User = ({ user, ...props }) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              className={style.usersPhoto}
              alt="users"
              src={
                user.photos.small != null
                  ? user.photos.small
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU'
              }
            ></img>
          </NavLink>
        </div>
        {user.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.unfollow(user.id)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.follow(user.id)
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.status}</div>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
      </div>
    </div>
  )
}

export default User
