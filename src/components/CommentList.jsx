import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import CommentCard from "./CommentCard";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://tr-games-api.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then((res) => {
        setComments(res.data.comments);
      });
  }, [review_id]);

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
        </div>
      )}
    </div>
  );
}

export default CommentList;
