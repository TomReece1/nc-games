import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import SortBy from "./SortBy";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  const [sortColumn, setSortColumn] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(`https://tr-games-api.herokuapp.com/api/reviews`, {
        params: {
          category: category,
          sort_by: sortColumn,
          order: sortOrder,
        },
      })
      .then((res) => {
        setReviews(res.data.reviews);
      })
      .catch((err) => {
        setErr("Something went wrong");
      });

    axios
      .get(`https://tr-games-api.herokuapp.com/api/categories`)
      .then((res) => {
        if (
          [
            ...res.data.categories.map((category) => {
              return category.slug;
            }),
            undefined,
          ].includes(category) === false
        ) {
          setErr("Something went wrong");
        }
      })
      .catch((err) => {
        setErr("Something went wrong");
      });
  }, [category, sortColumn, sortOrder]);

  return (
    <div>
      {err ? (
        <p>{err}</p>
      ) : (
        <main className="reviewList">
          <h2>Reviews</h2>
          <Filter />
          <SortBy setSortColumn={setSortColumn} setSortOrder={setSortOrder} />
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
      )}
    </div>
  );
}

export default ReviewList;
