import { useParams } from "react-router-dom";

function CommentCard({ body }) {
  const { review_id } = useParams();

  return (
    <div className="commentCard">
      <p>{body}</p>
    </div>
  );
}
export default CommentCard;
