import React from 'react'
import './buttom.scss'
import { AiOutlineDown } from "react-icons/ai";
export default function sightbarBtn() {
  return (
    <div className="sightbarBtn">
        <div className="sightbarBtn__icon-box">
          <AiOutlineDown className="sightbarBtn__icon"/>
        </div>
        <span className="sightbarBtn__text">See More</span>
    </div>
  )
}
