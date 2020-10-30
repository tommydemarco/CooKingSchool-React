import React from 'react';

function Loader() {
    return (
        <div className="loader">
            <div className="loader__container">
                <svg className="loader__icon">
                    <use xlinkHref="/assets/img/sprite.svg#icon-spinner9"></use>
                </svg>
            </div>
        </div>
    );
}

export default Loader;