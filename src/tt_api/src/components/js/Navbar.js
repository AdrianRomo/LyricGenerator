import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const refreshPage = () => {window.location.reload()}

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">                
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={() => {
                        closeMobileMenu();
                        if(window.location.pathname.length < 2)
                            refreshPage();
                    }}>
                        NeuraLyrics.com
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>  
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/samples' className='nav-links' onClick={closeMobileMenu}>
                                Samples
                            </Link>
                        </li>                        
                        <li className='nav-item'>
                            <Link to='/dev' className='nav-links' onClick={closeMobileMenu}>
                                Developers
                            </Link>
                        </li>
                    </ul>  
                </div>
            </nav>
        </>
    )
}

export default Navbar