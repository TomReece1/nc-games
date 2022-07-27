import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";

function ReviewDetail() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [voteStatus, setVoteStatus] = useState(0);
  const [err, setErr] = useState(null);

  const commentLinkString = `/review/${review_id}/comments`;

  function displayReview() {
    axios
      .get(`https://tr-games-api.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setReview(res.data.review);
      })
      .catch((err) => {
        setErr("404 review not found");
      });
  }

  useEffect(() => {
    displayReview();
  }, []);

  return (
    <div>
      {err ? (
        <p>{err}</p>
      ) : (
        <div className="reviewDetail">
          <h3>{review.title}</h3>
          <h5>By {review.owner}</h5>
          <img src={review.review_img_url} alt={review.title} />
          <p>
            Votes: {review.votes} - Comments: {review.comment_count}
          </p>
          <p>Your vote: {voteStatus}</p>
          <button
            disabled={voteStatus}
            onClick={(e) => {
              setVoteStatus(1);
              const upvotedReview = { ...review };
              upvotedReview.votes = upvotedReview.votes + 1;
              setReview(upvotedReview);
              setErr(null);
              axios
                .patch(
                  `https://tr-games-api.herokuapp.com/api/reviews/${review_id}`,
                  { inc_votes: 1 }
                )
                .catch((err) => {
                  setReview(review);
                  setErr("Something went wrong, please try again");
                });
            }}
          >
            Upvote
          </button>
          <button
            disabled={voteStatus}
            onClick={(e) => {
              setVoteStatus(-1);
              const upvotedReview = { ...review };
              upvotedReview.votes = upvotedReview.votes - 1;
              setReview(upvotedReview);
              axios
                .patch(
                  `https://tr-games-api.herokuapp.com/api/reviews/${review_id}`,
                  { inc_votes: -1 }
                )
                .catch((err) => {
                  setReview(review);
                  setErr("Something went wrong, please try again");
                });
            }}
          >
            Downvote
          </button>
          <button
            disabled={!voteStatus}
            onClick={(e) => {
              setVoteStatus(0);
              const upvotedReview = { ...review };
              upvotedReview.votes = upvotedReview.votes - voteStatus;
              setReview(upvotedReview);
              axios
                .patch(
                  `https://tr-games-api.herokuapp.com/api/reviews/${review_id}`,
                  { inc_votes: -voteStatus }
                )
                .catch((err) => {
                  setReview(review);
                  setErr("Something went wrong, please try again");
                });
            }}
          >
            Reset
          </button>
          <p>
            Category: {review.category}
            <br />
            Designer: {review.designer}
            <br />
            {review.review_body}
          </p>
          <CommentList />
        </div>
      )}
    </div>
  );
}
export default ReviewDetail;
