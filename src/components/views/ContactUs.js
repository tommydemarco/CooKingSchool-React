import React from 'react';

function ContactUs() {
    return(
        <main className="main">
            <div className="contact-us">
                <div className="banner">
                    <div className="banner__image-container">
                        <img src="/assets/img/contacts.jpg" alt="" className="banner__image" />
                    </div>
                    <header className="banner__title">
                        <h1 className="heading-1">Contact us</h1>
                        <p className="paragraph">We look forward to your message!</p>
                    </header>
                </div>
                <div className="detail">
                    <div className="form-container">
                        <form className="form" action="#">
                            <h3 className="form__title heading-3">We'll get back to you soon!</h3>
                            <input className="form__input" placeholder="Your name" type="text" />
                            <input className="form__input" placeholder="Your email" type="text" />
                            <textarea className="form__input form__input--textarea" placeholder="Your message"></textarea>
                            <button type="button" className="btn-primary">Send message</button>
                        </form>
                    </div>
                    <aside className="form-aside">
                        <h3 className="form-aside__title heading-3">Find us anywhere</h3>
                        <p className="form-aside__text">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                            amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                            amet.
                        </p>
                    </aside>
                </div>
            </div>
        </main>
    );
}

export default ContactUs;