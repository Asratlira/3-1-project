// src/components/Reviews.js
import React, { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = () => {
    setLoading(true);
    setError(null);
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch reviews");
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star full">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <span key={i + fullStars} className="star">
            ☆
          </span>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div className="loading-state">🔄 Loading reviews...</div>;
  }

  if (error) {
    return (
      <div className="error-state">
        ❌ Error: {error}
        <button onClick={fetchReviews} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h2>Book Reviews</h2>
        <button onClick={fetchReviews} className="refresh-button">
          Refresh Reviews
        </button>
      </div>

      {reviews.length === 0 ? (
        <div className="no-reviews">No reviews available yet</div>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              {review.coverImage && (
                <img
                  src={review.coverImage}
                  alt={review.bookTitle}
                  className="book-cover"
                />
              )}
              <div className="review-content">
                <h3>{review.bookTitle}</h3>
                <p className="author">BookName : {review.product_title}</p>
                <div className="rating-section">
                  {renderRatingStars(review.rating)}
                  <span className="rating-text">{review.rating}/5</span>
                </div>
                <p className="review-text">{review.review}</p>
                {review.date && (
                  <p className="review-date">
                    Reviewed on: {new Date(review.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
