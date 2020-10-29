import React from 'react';

function TheHeader() {
    return (
        <header className="header">
            <img src="/assets/img/logo.png" alt="" className="logo" />
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
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__user">
                    <img src="/assets/img/1.jpg" alt="" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Tommy</span>
                </div>
            </nav>

        </header>
    );
}

export default TheHeader;