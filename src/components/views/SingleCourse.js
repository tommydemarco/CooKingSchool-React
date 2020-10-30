import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CallToAction from '../elements/CallToAction';
import Loader from '../elements/Loader';
import FetchingError from '../elements/FetchingError';

function SingleCourse() {
    const { id } = useParams();
    const url = 'https://djshortcats.website/api/cooking/id/' + id;
    const [course, setCourse] = useState({
        isLoading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setCourse({
            isLoading:true,
            data:null,
            error:false
        })
        axios.get(url)
            .then(response => {
                console.log(response)
                if(!response.data.length) {
                    setCourse({
                        isloading:false,
                        data: null,
                        error: true
                    })
                } else {
                    setCourse({
                        isloading:false,
                        data: response.data[0],
                        error: false
                    })
                }
            }).catch(() => setCourse({
                    isLoading:false, 
                    data: null,
                    error: true
                }));
    }, [url])

    if(course.data) {
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
                            <div className="overview__rating--count">9.2</div>
                            <div className="overview__rating--number">43 ratings</div>
                        </div>
                    </header>
    
                    <div className="detail">
                        <div className="description">
                            <h3 className="heading-3">Course description</h3>
                            <p className="paragraph">
                                {course.data.description}
                            </p>
                            <h3 className="heading-3">Course contents</h3>
                            <ul className="list">
                                {course.data.contents.map(content => (
                                    <li key={content} className="list__item">{content}</li>
                                ))}
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
    } else if (course.error) {
        return (
            <FetchingError errorMessage="404"/>
        );
    } else {
        return(
            <Loader />
        )
    }
}

export default SingleCourse;