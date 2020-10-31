import React from 'react';
import { useParams } from 'react-router-dom';
import CallToAction from '../elements/CallToAction';
import Loader from '../elements/Loader';
import FetchingError from '../elements/FetchingError';
import TestimonialCard from '../cards/TestimonialCard';
import { useConnectAxiosGet } from '../../Hooks/APIConnection';

function SingleCourse() {
    const { id } = useParams();
    const course_url = 'https://djshortcats.website/api/cooking/id/' + id;
    const testimonials_url = 'https://djshortcats.website/api/cooking/testimonials/';
    const course_contents_url = 'https://djshortcats.website/api/cooking/contents/';
    
    let course = useConnectAxiosGet(course_url);
    let testimonials = useConnectAxiosGet(testimonials_url);
    let course_contents = useConnectAxiosGet(course_contents_url);

    let content = '';
    
    if(course.error || testimonials.error || course_contents.error) {
        content = <FetchingError errorMessage="404"/>
    }
    if (course.isLoading || testimonials.isLoading || course_contents.isLoading) {
        content = <Loader />
    }
    if(course.data && testimonials.data && course_contents.data) {
        const course_conts = 
            course_contents.data.filter(content => course.data.contents.includes(content.id));
        testimonials.data = testimonials.data.slice(0,2)
        content = 
            <div className="single-course">
                <div className="banner">
                    <div className="banner__image-container">
                        <img src={course.data.image} alt="" className="banner__image" />
                    </div>
                    <header className="overview">
                        <h1 className="overview__heading">{course.data.name}</h1>
                        <div className="overview__stars">
                            <svg className="overview__icon--star">
                                <use xlinkHref="/assets/img/sprite.svg#icon-star-full"></use>
                            </svg>
                            <svg className="overview__icon--star">
                                <use xlinkHref="/assets/img/sprite.svg#icon-star-full"></use>
                            </svg>
                            <svg className="overview__icon--star">
                                <use xlinkHref="/assets/img/sprite.svg#icon-star-full"></use>
                            </svg>
                            <svg className="overview__icon--star">
                                <use xlinkHref="/assets/img/sprite.svg#icon-star-full"></use>
                            </svg>
                            <svg className="overview__icon--star">
                                <use xlinkHref="/assets/img/sprite.svg#icon-star-full"></use>
                            </svg>
                        </div>

                        <div className="overview__rating">
                            <div className="overview__rating--count">{course.data.rating}</div>
                            <div className="overview__rating--number">43 ratings</div>
                        </div>
                    </header>
                </div>

                <div className="detail">
                    <div className="description">
                        <h3 className="heading-3">Course description</h3>
                        <p className="paragraph">
                            {course.data.description}
                        </p>
                        <h3 className="heading-3">Course contents</h3>
                        <ul className="list">
                            {course_conts.map((content, key) => (
                                <li key={content.id} className="list__item">{content.tag}</li>
                            ))}
                        </ul>
                    </div>
                    <aside className="user-review">
                        {testimonials.data.map((testimonial, key) => 
                            <TestimonialCard key={key} testimonial={testimonial} />
                        )}
                    </aside>
                </div>
                <CallToAction />
            </div>
    }
    return(
        <main className="main">
            {content}
        </main>
    );
   
}

export default SingleCourse;