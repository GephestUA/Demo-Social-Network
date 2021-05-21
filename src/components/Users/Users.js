import React from 'react'
import User from './User'
import Paginator from '../common/Paginator/Paginator'

const Users = (props) => {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        getUsers={props.getUsers}
      />
      <div>
        {props.users.map((u) => {
          return (
            <User
              key={u.id}
              user={u}
              followingInProgress={props.followingInProgress}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Users
