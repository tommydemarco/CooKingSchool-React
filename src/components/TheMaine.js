import React from 'react';

function TheMaine() {
    return(
        <main className="main">
            <div className="single-course">
                <div className="gallery">
                    <figure className="gallery__item">
                        <img src="/assets/img/hotel-1.jpg" className="gallery__image" />
                    </figure>
                    <figure className="gallery__item">
                        <img src="/assets/img/hotel-2.jpg" className="gallery__image" />
                    </figure>
                    <figure className="gallery__item">
                        <img src="/assets/img/hotel-3.jpg" className="gallery__image" />
                    </figure>
                </div>
                <header className="overview">
                    <h1 className="overview__heading">Cooking course</h1>
                    <div className="overview__stars">
                        <svg className="overview__icon--star">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <svg className="overview__icon--star">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <svg className="overview__icon--star">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <svg className="overview__icon--star">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                        <svg className="overview__icon--star">
                            <use xlinkHref="/assets/img/sprite.svg#icon-search"></use>
                        </svg>
                    </div>

                    <div className="overview__rating">
                        <div className="overview__rating--count">9.2</div>
                        <div className="overview__rating--number">43 ratings</div>
                    </div>
                </header>

                <div className="detail">
                    <div className="description">
                        <h3 className="heading-3">Course description</h3>
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
                        <h3 className="heading-3">Course contents</h3>
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
            </div>
        </main>
    )
}

export default TheMaine;