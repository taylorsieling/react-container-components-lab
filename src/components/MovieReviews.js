import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            {props.reviews.map((review, i) => (
                <div key={i} className="review">
                    <h2>{review.headline}</h2>
                    <h3>{review.byline}</h3>
                    <p>{review.summary_short}</p>
                    <p><a href={review.link.url}>Read More</a></p>
                </div>
            ))}
        </div>
    )
}
