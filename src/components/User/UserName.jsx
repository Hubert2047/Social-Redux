import React from 'react'

export default function UserName({className,firstName,lastName}) {
  return (
    <div className={'user__name '+ className}>
        <p className='user__last-name' >{lastName}</p>
        <p className='user__first-name'>{firstName}</p>
    </div>
  )
}
