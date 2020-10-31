import React from 'react';
import { NavLink } from 'react-router-dom';

function TheSideNav() {
    const activeLink = 'side-nav__link--active';
    return (
        <nav className="sidebar">
            <ul className="side-nav"> 
                <li className="side-nav__item">
                    <NavLink exact to="/" activeClassName={activeLink} className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-office"></use>
                        </svg>
                        <span className="side-nav__text">Home</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink to="/courses" activeClassName={activeLink} className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-fire"></use>
                        </svg>
                        <span className="side-nav__text">Courses</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink to="/testimonials" activeClassName={activeLink} className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-users"></use>
                        </svg>
                        <span className="side-nav__text">Testimonials</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink to="/contacts" activeClassName={activeLink} className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-mail2"></use>
                        </svg>
                        <span className="side-nav__text">Contacts</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default TheSideNav;