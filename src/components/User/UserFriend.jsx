import React ,{useState} from 'react'
import UserAvatar from './UserAvatar'
import UserName from './UserName'
import UserProfileCard from '../Card/UserProfileCard/UserProfileCard';

export default function UserFriend({friend}) {
 const [isShown, setIsShown] = useState(false);
  let isOnlineStyle={}
  if(friend.isOnline) {
    isOnlineStyle={
        backgroundColor: '#00A400'
    }
  }else{
     isOnlineStyle={
        backgroundColor: '#8D949E'
    }
  }
  return (
    <div className="user userFriend" onMouseEnter={()=>setIsShown(true)}  onMouseLeave={() => setIsShown(false)}>
        <div className="userFriend__icon-box">
            <UserAvatar userAvatar={friend.avatar}/>
            <div style={isOnlineStyle} className="icon-state"></div>
        </div>
        <UserName firstName={friend.firstName} lastName={friend.lastName}/>
      { isShown && <div className="userFriend__card"> <UserProfileCard friend={friend} />  </div>}
     </div>
  )
}
