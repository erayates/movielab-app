import {useState} from 'react'
import './style.css'

function SwitchTabs({ setDateRange, dateRange, setMediaType, mediaType }) {
  return (
    <label className="toggle">
        <input type="checkbox"/>
        <span className="slider"></span>
        {dateRange &&   <span className="labels" data-on="DAILY" data-off="WEEKLY" onClick={() => setDateRange(dateRange !== 'day' ? 'day' : 'week')}></span>}
        {mediaType &&  <span className="labels" data-on="MOVIES" data-off="TV SHOWS" onClick={() => setMediaType(mediaType !== 'movie' ? 'movie' : 'tv')}></span>}
    </label>


  )
}

export default SwitchTabs