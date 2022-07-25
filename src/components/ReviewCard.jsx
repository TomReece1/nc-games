function ReviewCard({ title, category, votes }) {
  return (
    <div className="reviewCard">
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Votes: {votes}</p>
    </div>
  );
}
export default ReviewCard;
