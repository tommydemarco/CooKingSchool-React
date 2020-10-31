import React from 'react';
import TestimonialCardFull from '../cards/TestimonialCardFull';
import Loader from '../elements/Loader';
import FetchingError from '../elements/FetchingError';
import { useConnectAxiosGet } from '../../Hooks/APIConnection';

function Testimonials() {
    const url = 'https://djshortcats.website/api/cooking/testimonials/';
    let testimonials = useConnectAxiosGet(url);

    let content = '';
    if (testimonials.error) {
        content = <FetchingError errorMessage="404"/>
    }
    if (testimonials.isLoading) {
        content = <Loader />
    }
    if (testimonials.data) {
        content = 
        testimonials.data.map((testimonial, key) => 
            <TestimonialCardFull key={key} testimonial={testimonial} />
        )
    }
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
                    {content}
                </div>
            </div>
        </main>
    );
}

export default Testimonials;