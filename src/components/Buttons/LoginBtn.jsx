import BtnLoginIcon from "../Icons/BtnLoginIcon"
import '../../styles/globals.css'

const LoginBtn = () => {
    return (
        <button className='login__btn'>
            <BtnLoginIcon />
            <span className="hidden lg:inline-block">Login</span>
        </button>
    )
}

export default LoginBtn