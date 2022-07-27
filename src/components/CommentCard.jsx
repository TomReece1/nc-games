import axios from "axios";
import { UserContext } from "../contexts/User";
import { useContext, useState } from "react";

function CommentCard({
  author,
  body,
  comment_id,
  displayComments,
  setCommentDeleted,
}) {
  const { user } = useContext(UserContext);
  const [err, setErr] = useState(null);

  const loggedIn = user.username === author;

  return (
    <div>
      {err ? (
        <p>{err}</p>
      ) : (
        <div className="commentCard">
          <p>
            {author}: {body}
          </p>

          {loggedIn && (
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
                  })
                  .catch((err) => {
                    setErr("Could not delete comment, sorry");
                  });
              }}
            >
              delete
            </button>
          )}
        </div>
      )}
    </div>
  );
}
export default CommentCard;
