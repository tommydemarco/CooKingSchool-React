import React from 'react';

function TheFooter() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul class="footer-nav__list">
                    <li className="footer-nav__item">
                        <a href="/" className="footer-nav__link">Cookie policy</a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="/" className="footer-nav__link">Privacy policy</a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="/" className="footer-nav__link">Contact developer</a>
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