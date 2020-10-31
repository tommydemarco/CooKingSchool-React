import React from 'react';

function TestimonialCard(props){
    return (
        <article className="review review__single-column">
            <blockquote className="review__text">
                {props.testimonial.review}
            </blockquote>
            <div className="review__user">
                <img src={props.testimonial.image} alt="" class="review__image" />
                <div className="review__user-box">
                    <h4 className="review__user-name">{props.testimonial.name}</h4>
                    <p className="review__user-location">{props.testimonial.location}</p>
                </div>
                <div class="review__rating">{props.testimonial.rating}</div>
            </div>
        </article>
    )
}

export default TestimonialCard;