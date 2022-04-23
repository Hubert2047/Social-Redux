import React from 'react'

export default function UserAvatar({userAvatar,className}) {
  return (
    <div>
       <img className={'user__img ' + className} src={userAvatar} alt="avatar" />
    </div>
  )
}
