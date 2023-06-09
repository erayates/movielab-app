import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'


const CircularProgress = ({ value, className}) => {
    return (
        <CircularProgressbar
            value={value * 10}
            text={parseFloat(value).toFixed(1)}
            className={className || ''}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#fff",
                textColor: "#151515",
                pathColor: "",
                trailColor: "transparent",
                textSize: '26px',
                boxShadow: "outset 0 0 25px 10px #fff"
            })}
        />
    )
}

export default CircularProgress