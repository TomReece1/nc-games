import axios from "axios";
function CommentCard({ body, comment_id, displayComments }) {
  return (
    <div className="commentCard">
      <p>{body}</p>
      <button
        onClick={() => {
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
