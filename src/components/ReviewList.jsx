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
  const [err, setErr] = useState(null);

  useEffect(() => {
    console.log("you just clicked a category");
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

  function checkBoxes() {
    const boxes = document.querySelectorAll(".reviewCard");

    const triggerBottom = window.innerHeight * 0.8;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);

  return (
    <main className="reviewList">
      {err ? (
        <p>{err}</p>
      ) : (
        <div>
          <div className="filters">
            <h3>Reviews</h3>
            <Filter />
            <SortBy setSortColumn={setSortColumn} setSortOrder={setSortOrder} />
          </div>
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
        </div>
      )}
    </main>
  );
}

export default ReviewList;
