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

// exampleResponse":{"review":[
//     {"review_id":1,
//     "title":"Agricola",
//     "category":"euro game",
//     "designer":"Uwe Rosenberg",
//     "owner":"mallionaire",
//     "review_body":"Farmyard fun!",
//     "review_img_url":"https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
//     "created_at":"2021-01-18T10:00:20.514Z",
//     "votes":1,
//     "comment_count":"0"}
// ]}}
