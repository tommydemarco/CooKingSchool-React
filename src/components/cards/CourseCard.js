import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard(props) {
    let contents = props.conts.filter(content => props.course.contents.includes(content.id));
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
                    {contents.map((content, key) => (
                        <li key={key} className="course-card__list-item">{content.tag}</li>
                    ))}
                </ul>
            </div>
            <div className="course-card__ending">
                <h4 className="course-card__price">€{props.course.price}</h4>
                <Link to={`/courses/${props.course.id}`} className="course-card__button">See details</Link>
            </div>                  
        </article>
    );
}
export default CourseCard;