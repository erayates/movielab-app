import GithubIcon from '../Icons/GithubIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'

function Footer() {
  return (

    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <h1 className="footer__left-title">
            <span className="text-white">Movie</span>
            <span className="footer__left-title-span">.Lab</span>
          </h1>
          <span className="footer__left-subtitle">Discover, share and watch!</span>
        </div>
        <div className='footer__right'>
          <p className='footer__right-title'>Designed by Eray Ates.</p>
          <div>
            <GithubIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer