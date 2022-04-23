import React from 'react'
import clsx from 'clsx'
import styles from './ShareType.module.scss'
import { IoMdPeople } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

export default function ShareType() {
  return (
    <div className={clsx(styles.shareType,'d-flex-r')}>
        <IoMdPeople/>
        <p>friends</p>
        <RiArrowDownSFill/>
    </div>
  )
}
