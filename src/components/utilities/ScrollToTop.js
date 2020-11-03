import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
    const { pathname } = useLocation();
    useEffect(() => {
        const mainContentOffset = document.getElementsByClassName('app')[0].offsetTop;
        if (window.pageYOffset >  mainContentOffset) {
            window.scrollTo(0, mainContentOffset)
        }
    }, [pathname])
    return (
        <div>
            {children}
        </div>
    )
}

export default ScrollToTop;