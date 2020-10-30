import React from 'react';
import CallToAction from '../elements/CallToAction';

function TheHome() {
    return(
        <main className="main">
            <div className="the-home">
                <div class="banner">
                    <div class="banner__image-container">
                        <img src="/assets/img/home-banner.jpg" alt="" class="banner__image" />
                    </div>
                    <header className="banner__title">
                        <h1 className="heading-1">Welcome to our cooking school</h1>
                        <p className="paragraph">Come cook with us!</p>
                    </header>
                </div>

                <div className="detail">
                    <div className="description">
                        <h3 className="heading-3">About our school</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor.
                        </p>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor.
                        </p>
                        <h3 className="heading-3">What we offer</h3>
                        <ul className="list">
                            <li className="list__item">Team cooking</li>
                            <li className="list__item">Wine combinations</li>
                            <li className="list__item">Great negotiation</li>
                            <li className="list__item">Is about great</li>
                            <li className="list__item">Communication</li>
                        </ul>
                    </div>
                    <aside className="user-review">
                        <article className="review">
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
                    </aside>
                </div>
                <CallToAction />
            </div>
        </main>
    );
}

export default TheHome;