import React from 'react';
import { Link } from 'react-router-dom';

function TheHeader() {
    return (
        <header className="header">
            {/* <img src="/assets/img/logo.png" alt="" className="logo" /> */}
            <a href="/" className="logo-text">CooKing</a>
            <form action="#" className="search">
                <input type="text" placeholder="Search something amazing" className="search__input" />
                <button type="button" className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref="/assets/img/sprite.svg#icon-search">
                        </use>
                    </svg>
                </button>
            </form>
            <nav className="user-nav">
                <Link to="/">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-earth"></use>
                        </svg>
                    </div>
                </Link>
                <Link to="/courses">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-enter"></use>
                        </svg>
                    </div>
                </Link>
                <Link to="/contacts">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/assets/img/sprite.svg#icon-bubbles"></use>
                        </svg>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default TheHeader;