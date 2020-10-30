import React from 'react';

function Testimonials() {
    return (
        <main className="main">
            <div className="testimonials">
                <div class="banner">
                    <div class="banner__image-container">
                        <img src="/assets/img/testimonials.jpg" alt="" class="banner__image" />
                    </div>
                    <header className="banner__title">
                        <h1 className="heading-1">Testimonials</h1>
                        <p className="paragraph">What our students say about us</p>
                    </header>
                </div>
                <div className="detail sb">
                    <article className="review column-half">
                        <blockquote className="review__text">
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor. no sea takimata sanctus est Lorem ipsum.
                        </blockquote>
                        <div className="review__user">
                            <img src="/assets/img/user-2.jpg" alt="" class="review__image" />
                            <div className="review__user-box">
                                <h4 className="review__user-name">John Doe</h4>
                                <p className="review__user-location">New-York NY</p>
                            </div>
                            <div class="review__rating">9.7</div>
                        </div>
                    </article>
                    <article className="review column-half">
                        <blockquote className="review__text">
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor. no sea takimata sanctus est Lorem ipsum.
                        </blockquote>
                        <div className="review__user">
                            <img src="/assets/img/user-2.jpg" alt="" class="review__image" />
                            <div className="review__user-box">
                                <h4 className="review__user-name">John Doe</h4>
                                <p className="review__user-location">New-York NY</p>
                            </div>
                            <div class="review__rating">9.7</div>
                        </div>
                    </article>
                    <article className="review column-half">
                        <blockquote className="review__text">
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor. no sea takimata sanctus est Lorem ipsum.
                        </blockquote>
                        <div className="review__user">
                            <img src="/assets/img/user-2.jpg" alt="" class="review__image" />
                            <div className="review__user-box">
                                <h4 className="review__user-name">John Doe</h4>
                                <p className="review__user-location">New-York NY</p>
                            </div>
                            <div class="review__rating">9.7</div>
                        </div>
                    </article>
                    <article className="review column-half">
                        <blockquote className="review__text">
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor. no sea takimata sanctus est Lorem ipsum.
                        </blockquote>
                        <div className="review__user">
                            <img src="/assets/img/user-2.jpg" alt="" class="review__image" />
                            <div className="review__user-box">
                                <h4 className="review__user-name">John Doe</h4>
                                <p className="review__user-location">New-York NY</p>
                            </div>
                            <div class="review__rating">9.7</div>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}

export default Testimonials;