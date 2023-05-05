import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './Navbar.css';

export function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="MyStore" className='logo' />
            </Link>
        </nav>
    )
}