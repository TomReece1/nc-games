import { Link } from "react-router-dom";

function ReviewCard({ review_id, title, category, votes }) {
  const linkString = `/review/${review_id}`;
  return (
    <div className="reviewCard">
      <h3>{title}</h3>
      <p>Review_id: {review_id}</p>
      <p>Category: {category}</p>
      <p>Votes: {votes}</p>
      <Link to={linkString}>View</Link>
    </div>
  );
}
export default ReviewCard;
