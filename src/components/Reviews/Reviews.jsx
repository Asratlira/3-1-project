// src/components/Reviews.js
import React, { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = (signal) => {
    setLoading(true);
    setError(null);
    fetch("/data.json", { signal })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch reviews");
        return response.json();
      })
      .then((data) => {
        // Data validation
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        data.forEach((review) => {
          if (
            typeof review.rating !== "number" ||
            review.rating < 0 ||
            review.rating > 5
          ) {
            throw new Error("Invalid rating value");
          }
        });
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error.message);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchReviews(abortController.signal);
    return () => abortController.abort();
  }, []);

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div
        className="star-rating"
        aria-label={`Rating: ${rating} out of 5 stars`}
      >
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <span key={`empty-${i}`} className="star">
            ☆
          </span>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        Loading reviews...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        ⚠️ Error loading reviews: {error}
        <button onClick={() => fetchReviews()} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1 className="text-2xl font-serif font-bold">Book Reviews</h1>
        <button onClick={() => fetchReviews()} className="refresh-button">
          ↻ Refresh
        </button>
      </div>

      {reviews.length === 0 ? (
        <div className="no-reviews">📚 No reviews available yet</div>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => {
            const isValidDate =
              review.date && !isNaN(new Date(review.date).getTime());

            return (
              <div key={review.id} className="review-card">
                {review.coverImage && (
                  <img
                    src={review.coverImage}
                    alt={`Cover for ${review.bookTitle}`}
                    className="book-cover"
                    onError={(e) => {
                      e.target.src = "/default-cover.jpg";
                      e.target.onerror = null;
                    }}
                  />
                )}
                <div className="review-content">
                  <h2>{review.bookTitle}</h2>
                  <p className="author text-xl font-serif font-bold">
                    BookName {review.product_title}
                  </p>
                  <div className="rating-section">
                    {renderRatingStars(review.rating)}
                    <span className="rating-text">
                      {review.rating.toFixed(1)}/5
                    </span>
                  </div>
                  <p className="review-text">{review.review}</p>
                  {isValidDate && (
                    <p className="review-date">
                      Reviewed on:{" "}
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
