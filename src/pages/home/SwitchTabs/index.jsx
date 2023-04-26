import {useState} from 'react'
import './style.css'

function SwitchTabs({ setDateRange, dateRange }) {
 

  return (
    <label className="toggle">
        <input type="checkbox"/>
        <span className="slider"></span>
        <span className="labels" data-on="DAILY" data-off="WEEKLY" onClick={() => setDateRange(dateRange !== 'day' ? 'day' : 'week')}></span>
    </label>


  )
}

export default SwitchTabs