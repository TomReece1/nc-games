import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReviewDetail() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    axios
      .get(`https://tr-games-api.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setReview(res.data.review);
      });
  }, []);

  return (
    <div className="reviewDetail">
      <h3>{review.title}</h3>
      <h5>
        By {review.owner} - {Date(review.created_at)}
      </h5>
      <img src={review.review_img_url} alt={review.title} />
      <p>
        Votes: {review.votes} - Comments: {review.comment_count}
      </p>
      <p>
        Category: {review.category}
        <br />
        Designer: {review.designer}
        <br />
        {review.review_body}
      </p>
    </div>
  );
}
export default ReviewDetail;

// exampleResponse":{"review":[
//     {"review_id":1,
//     "title":"Agricola",
//     "category":"euro game",
//     "designer":"Uwe Rosenberg",
//     "owner":"mallionaire",
//     "review_body":"Farmyard fun!",
//     "review_img_url":"https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
//     "created_at":"2021-01-18T10:00:20.514Z",
//     "votes":1,
//     "comment_count":"0"}
// ]}}
