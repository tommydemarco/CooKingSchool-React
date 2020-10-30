import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <div className="cta">
            <h2 className="cta__book-now">Join us in our cooking experience</h2>
            <Link to="/contacts">
                <button className="btn">
                    <span className="btn__visible">Book now!</span>
                    <span className="btn__hidden">Limited availability</span>
                </button>
            </Link>
        </div>
    );
}

export default CallToAction;