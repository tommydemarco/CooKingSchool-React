import React from 'react';

function TheSideNav() {
    return (
        <nav className="sidebar">
            <ul class="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <span>Navigation</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <span>Navigation</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <span>Navigation</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <span>Navigation</span>
                    </a>
                </li>
            </ul>

            <div className="legal">
                You are logged in as Tommy
            </div>
        </nav>
    );
}

export default TheSideNav;