import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import Filter from "./Filter";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let API_string = "https://tr-games-api.herokuapp.com/api/reviews";
    if (category) {
      API_string += `?category=${category}`;
    }

    axios.get(API_string).then((res) => {
      setReviews(res.data.reviews);
    });
  }, [category]);

  return (
    <main className="reviewList">
      <h2>Reviews</h2>
      <Filter />
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <ReviewCard
                review_id={review.review_id}
                title={review.title}
                category={review.category}
                votes={review.votes}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ReviewList;
