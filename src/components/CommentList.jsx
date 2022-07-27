import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [commentToAdd, setCommentToAdd] = useState("");
  const { review_id } = useParams();
  const [commentDeleted, setCommentDeleted] = useState(false);
  const { user } = useContext(UserContext);
  const [err, setErr] = useState(null);

  const displayComments = () => {
    axios
      .get(
        `https://tr-games-api.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        setErr("Something went wrong");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://tr-games-api.herokuapp.com/api/reviews/${review_id}/comments`,
        {
          username: user.username,
          body: commentToAdd,
        }
      )
      .then(() => {
        setCommentToAdd("");
      })
      .catch((err) => {
        setErr("Something went wrong");
      });
  };

  useEffect(() => {
    displayComments();
  }, [review_id, commentToAdd]);

  return (
    <div>
      {err ? (
        <p>{err}</p>
      ) : (
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
              {commentDeleted && <p>Comment was deleted</p>}
              <ul>
                {comments.map((comment) => {
                  return (
                    <li key={comment.comment_id}>
                      <CommentCard
                        author={comment.author}
                        body={comment.body}
                        comment_id={comment.comment_id}
                        displayComments={displayComments}
                        setCommentDeleted={setCommentDeleted}
                      />
                    </li>
                  );
                })}
              </ul>

              {(user.username && (
                <form onSubmit={handleSubmit}>
                  <h3>Add a comment</h3>

                  <label>Text:</label>
                  <textarea
                    value={commentToAdd}
                    onChange={(e) => {
                      setCommentToAdd(e.target.value);
                    }}
                  />

                  {commentToAdd ? (
                    <button type="submit">Submit</button>
                  ) : (
                    <button disabled={true} type="submit">
                      Enter text first
                    </button>
                  )}
                </form>
              )) || (
                <Link to="/change_user">
                  <p>Log in to add comments</p>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CommentList;
