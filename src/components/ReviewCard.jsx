import { Link } from "react-router-dom";

function ReviewCard({ review_id, title, category, votes }) {
  const linkString = `/review/${review_id}`;
  return (
    <div className="reviewCard">
      <Link to={linkString}>
        <h3>{title}</h3>
      </Link>
      <p>Category: {category}</p>
      <p>Votes: {votes}</p>
    </div>
  );
}

export default ReviewCard;
