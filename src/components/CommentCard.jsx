import axios from "axios";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

function CommentCard({
  author,
  body,
  comment_id,
  displayComments,
  setCommentDeleted,
}) {
  const { user } = useContext(UserContext);

  const loggedIn = user.username === author;

  return (
    <div className="commentCard">
      <p>
        {author}: {body}
      </p>
      <button
        disabled={!loggedIn || !user.username}
        onClick={() => {
          setCommentDeleted(true);
          axios
            .delete(
              `https://tr-games-api.herokuapp.com/api/comments/${comment_id}`
            )
            .then(() => {
              displayComments();
            });
        }}
      >
        delete
      </button>
    </div>
  );
}
export default CommentCard;
