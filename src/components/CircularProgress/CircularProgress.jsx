import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'


const CircularProgress = ({ value }) => {
    return (
        <CircularProgressbar
            value={value * 10}
            text={value.toFixed(1)}
            className='w-[60px] h-[60px] mt-3 absolute bottom-[20%] right-[-15px] z-30'
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