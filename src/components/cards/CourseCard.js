import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard(props) {
    return (
        <article className="course-card column-half">
            <header>
                <div className="course-card__img-container">
                    <img className="course-card__image" src={props.course.image} alt=""/> 
                </div>
                <h2 className="course-card__title">{props.course.name}</h2>
            </header>
            <div className="course-card__description">
                <ul className="course-card__list">
                    {props.course.contents.map((content, key) => (
                        <li key={content} className="course-card__list-item">{content}</li>
                    ))}
                </ul>
            </div>
            <div className="course-card__ending">
                <h4 class="course-card__price">{props.course.price}</h4>
                <Link to={`/courses/${props.course.id}`} className="course-card__button">See details</Link>
            </div>                  
        </article>
    );
}

export default CourseCard;