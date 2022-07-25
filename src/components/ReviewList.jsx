import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("https://tr-games-api.herokuapp.com/api/reviews").then((res) => {
      setReviews(res.data.reviews);
    });
  }, []);

  return (
    <main>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <ReviewCard title={review.title} votes={review.votes} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ReviewList;
