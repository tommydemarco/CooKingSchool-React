import React from 'react';
import { Link } from 'react-router-dom';

function TheFooter() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item">
                        <Link to="/cookies-policy" className="footer-nav__link">Cookie policy</Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link to="/privacy-policy" className="footer-nav__link">Privacy policy</Link>
                    </li>
                    <li className="footer-nav__item">
                        <a href="https://tommasodemarco.com" className="footer-nav__link">Contact developer</a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="https://github.com/tommydemarco" className="footer-nav__link">View on GitHub</a>
                    </li>
                </ul>
            </nav>
            <div className="footer__legal">
                <p className="paragraph">
                    This website is only a personal project and has no commercial/representational purposes. <br/>
                    <b>This website does not represent any real company.</b>
                </p>
            </div>
        </footer>
    );
}

export default TheFooter;