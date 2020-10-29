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
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                    </svg>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                    </svg>
                </div>
            </nav>

        </header>
    );
}

export default TheHeader;