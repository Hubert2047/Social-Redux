import React from 'react'
import UserAvatar from './UserAvatar';
import UserName from './UserName';
import { BiWorld } from "react-icons/bi";
export default function UserPost({createAt,userAvatar,firstName,lastName,className}) {
  return (
    <div className='user userPost'>
        <UserAvatar userAvatar={userAvatar}/>
        <div className="userPost__body">
            <UserName firstName={firstName} lastName={lastName} className='userPost__name'/>
            <div className="userPost__time-box">
                <div className="userPost__time">
                        {createAt}
                </div>
                <div className="userPost__share-type">
                    <BiWorld className='userPost__icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
