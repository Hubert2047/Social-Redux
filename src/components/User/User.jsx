import React from 'react'
import './user.scss'
import UserAvatar from './UserAvatar';
import UserName from './UserName';
export default function User({userAvatar,firstName,lastName,className}) {
  return (
           <div className='user'>
                <UserAvatar userAvatar={userAvatar}/>
                <UserName 
                firstName={firstName} 
                lastName={lastName}
                className={className}
                />
            </div>
  )
}
