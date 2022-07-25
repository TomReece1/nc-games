function ReviewCard({ title, votes }) {
  return (
    <div className="reviewCard">
      <h3>{title}</h3>
      <p>Votes: {votes}</p>
    </div>
  );
}
export default ReviewCard;
