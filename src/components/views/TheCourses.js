import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../cards/CourseCard';
import Loader from '../elements/Loader';
import FetchingError from '../elements/FetchingError';

function TheCourses() {
    const url = 'https://djshortcats.website/api/cooking/list/';

    const [courses, setCourse] = useState({
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
                        data: response.data,
                        error: false
                    })
                }
            }).catch(() => setCourse({
                    isLoading:false, 
                    data: null,
                    error: true
                }));
    }, [url])

    let content = ''

    if (courses.error) {
        content = <FetchingError />
    }
    if (courses.isLoading) {
        content = <Loader />
    }
    if (courses.data) {
        content = 
        courses.data.map((course, key) => 
            <CourseCard course={course} />
        )
    }

    return (
        <main className="main">
            <div className="testimonials">
                <div class="banner">
                    <div class="banner__image-container">
                        <img src="/assets/img/courses.jpg" alt="" class="banner__image" />
                    </div>
                    <header className="banner__title">
                        <h1 className="heading-1">Our courses</h1>
                        <p className="paragraph">Come cook with us!</p>
                    </header>
                </div>
                <div className="detail sb">
                    {content}
                </div>
            </div>
        </main>
    );
    
}

export default TheCourses;