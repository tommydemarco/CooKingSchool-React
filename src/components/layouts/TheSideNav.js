import React from 'react';

function TheSideNav() {
    return (
        <nav className="sidebar">
            <ul class="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-office"></use>
                        </svg>
                        <span>Home</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-fire"></use>
                        </svg>
                        <span>Courses</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-users"></use>
                        </svg>
                        <span>Testimonials</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-mail2"></use>
                        </svg>
                        <span>Contacts</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default TheSideNav;