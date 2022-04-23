import React from 'react'
import {Context} from '../Context/Context'
import {user} from '../../data/api'
export default function ContextProvider({children}) {
  return (
        <Context.Provider value={user}>
                {children}
        </Context.Provider>
  )
}
