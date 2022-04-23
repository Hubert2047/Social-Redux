import React from 'react'
import UserAvatar from '../User/UserAvatar';

export default function UserState({userAvatar,isOnline,avatarClassName,stateClassName}) {
  let isOnlineStyle={}
  if(isOnline) {
    isOnlineStyle={
        backgroundColor: '#00A400'
    }
  }else{
     isOnlineStyle={
        backgroundColor: '#8D949E'
    }
  }
  return (
    <div className="user user-state">
        <div className="user-state__icon-box">
          <UserAvatar userAvatar={userAvatar} className={avatarClassName}/>
          <div style={isOnlineStyle} className={"icon-state "+stateClassName}></div>
        </div>

    </div>
  )
}
