import {useState,useEffect} from 'react'
import './styles.css'

function Loading() {
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1500)
    },[])

  return (
    <>
        {loading &&
        <div className='loading_spinner'>
            <div className='spinner'>
                <img src='./logo.png' alt='logo' className='logo w-[150px] mx-auto block mt-5 spinner_logo'/>
            </div>
        </div> }
    </>

  )
}

export default Loading