import React from 'react';
import CallToAction from '../elements/CallToAction';
import TestimonialCard from '../cards/TestimonialCard';
import Loader from '../elements/Loader';
import { useConnectAxiosGet } from '../../Hooks/APIConnection';

function TheHome() {
    const testimonials_url = 'https://djshortcats.website/api/cooking/testimonials/';

    let testimonials = useConnectAxiosGet(testimonials_url);

    let content = '';
    if (testimonials.error) {
        content = '';
    }
    if (testimonials.isLoading) {
        content = <Loader />
    }
    if (testimonials.data) {
        testimonials.data = testimonials.data.slice(0, 2)
        content = 
        testimonials.data.map((testimonial, key) => 
            <TestimonialCard key={key} testimonial={testimonial} />
        )
    }
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
                    <aside className="user-reviews">
                        {content}
                    </aside>
                </div>
                <CallToAction />
            </div>
        </main>
    );
}

export default TheHome;