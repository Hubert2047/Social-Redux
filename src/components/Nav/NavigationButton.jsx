import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from  './NavigationButton.module.scss'
export default function NavigationButton({navBtn,handleNavigation,activeNavBtnId}) {       
  const isActiveBtn = navBtn.id===activeNavBtnId
  const classes = clsx(styles.button,{[styles.active]:isActiveBtn})
  return (
    <Link to={navBtn.link}  
        className={classes}
        onClick={()=>{handleNavigation(navBtn.id)}} 
        name={navBtn.name} >

        {navBtn.icon}
    </Link>
  )
}
