import React from 'react';
import CourseCard from '../cards/CourseCard';
import Loader from '../elements/Loader';
import FetchingError from '../elements/FetchingError';
import { useConnectAxiosGet } from '../../Hooks/APIConnection';

function TheCourses() {
    const courses_url = 'https://djshortcats.website/api/cooking/list/';
    const courses_contents_url = 'https://djshortcats.website/api/cooking/contents/';

    let courses = useConnectAxiosGet(courses_url);
    let courses_contents = useConnectAxiosGet(courses_contents_url);

    let content = '';

    if (courses.error || courses_contents.error) {
        content = <FetchingError />
    }
    if (courses.isLoading || courses_contents.isLoading) {
        content = <Loader />
    }
    if (courses.data && courses_contents.data) {
        content = 
        courses.data.map((course, key) => 
            <CourseCard 
                key={course.id} 
                conts={courses_contents.data}
                course={course} 
            />
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