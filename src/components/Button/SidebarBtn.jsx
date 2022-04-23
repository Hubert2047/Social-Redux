import React from 'react'
import './buttom.scss'
import { AiOutlineDown } from "react-icons/ai";
export default function SidebarBtn() {
  return (
    <div className="sidebarBtn">
        <div className="sidebarBtn__icon-box">
          <AiOutlineDown className="sidebarBtn__icon"/>
        </div>
        <span className="sidebarBtn__text">See More</span>
    </div>
  )
}
