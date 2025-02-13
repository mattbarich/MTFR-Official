import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEnvelope, faHome, faInfo } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faInfo} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mattbarich/'>
                    <FontAwesomeIcon icon={faArrowLeft} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar