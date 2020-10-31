import React from 'react';
import { Link } from 'react-router-dom';

function TheFooter() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul class="footer-nav__list">
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
        </footer>
    );
}

export default TheFooter;