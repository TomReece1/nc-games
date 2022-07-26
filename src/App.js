import "./App.css";
import ReviewList from "./components/ReviewList";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ReviewDetail from "./components/ReviewDetail";
import { Link } from "react-router-dom";
import CommentList from "./components/CommentList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>NC Games</h1>
        <Link to="/">Home</Link>

        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews/:category" element={<ReviewList />} />
          <Route path="/review/:review_id" element={<ReviewDetail />} />
          <Route
            path="/review/:review_id/comments"
            element={
              <div>
                <ReviewDetail />
                <CommentList />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
