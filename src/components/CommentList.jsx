import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import CommentCard from "./CommentCard";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [commentToAdd, setCommentToAdd] = useState("");
  const { review_id } = useParams();

  const displayComments = () => {
    axios
      .get(
        `https://tr-games-api.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then((res) => {
        setComments(res.data.comments);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://tr-games-api.herokuapp.com/api/reviews/${review_id}/comments`,
        {
          username: "jessjelly",
          body: commentToAdd,
        }
      )
      .then(() => {
        setCommentToAdd("");
      });
  };

  useEffect(() => {
    displayComments();
  }, [review_id, commentToAdd]);

  return (
    <div className="commentList">
      <button
        onClick={() => {
          setIsOpen((currentOpenness) => !currentOpenness);
        }}
      >
        Show comments
      </button>
      {isOpen && (
        <div>
          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <CommentCard body={comment.body} />
                </li>
              );
            })}
          </ul>

          <form onSubmit={handleSubmit}>
            <h3>Add a comment</h3>

            <label>Text:</label>
            <textarea
              value={commentToAdd}
              onChange={(e) => {
                setCommentToAdd(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CommentList;
