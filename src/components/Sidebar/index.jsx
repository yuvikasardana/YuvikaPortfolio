import './sidebar.scss'
import logoY from '../../assets/images/coolY.png'
import { Link, NavLink } from 'react-router-dom'
import subtitle from '../../assets/images/Yuvika.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);




    return (<div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={logoY} alt="logo" />
            <img className="sub-logo" src={subtitle} alt="Yuvika" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/"onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
            </NavLink>
            <FontAwesomeIcon icon={faClose} color="#ffd700" size="3x" className="close-icon" onClick={()=>setShowNav(false)}/>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/yuvikasardana/ ">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://github.com/yuvikasardana">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

        </ul>
        <FontAwesomeIcon icon={faBars}
            onClick={() => setShowNav(true)}
            color="#ffd700"
            size="3x"
            className='hamburger-icon'
        />
    </div>)
}

export default Sidebar