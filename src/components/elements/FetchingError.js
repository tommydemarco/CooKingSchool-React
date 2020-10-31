import React from 'react';

function FetchingError(props) {
    let errorMessage = '';
    if (props.errorMessage === '404') {
        errorMessage = "We could not find the page you were looking for"
    } else {
        errorMessage = "Oops, there was an error while getting what you asked for"
    }
    return(
        <div className="error">
            <div className="error__container">
                <p className="error__message">
                    {errorMessage}
                </p>
            </div>
        </div>
    );
}

export default FetchingError;