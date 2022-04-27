import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { headerActions } from '../Store/header-slice'
import styles from './NavigationButton.module.scss'

export default function NavigationButton({ navBtn }) {
    const activeNavbarId = useSelector((state) => state.header.activeNavbarId)
    const isActiveBtn = navBtn.id === activeNavbarId
    const dispatch = useDispatch()
    const handleNabClick = () => {
        dispatch(headerActions.setActiveNavbarId(navBtn.id))
    }
    const classes = clsx(styles.button, { [styles.active]: isActiveBtn })
    return (
        <Link
            to={navBtn.link}
            className={classes}
            onClick={handleNabClick}
            name={navBtn.name}>
            {navBtn.icon}
        </Link>
    )
}
