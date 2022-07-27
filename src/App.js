import "./App.css";
import ReviewList from "./components/ReviewList";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ReviewDetail from "./components/ReviewDetail";
import { Link } from "react-router-dom";
import CommentList from "./components/CommentList";
import { UserContext } from "./contexts/User";
import { useContext, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ChangeUser from "./components/ChangeUser";

function App() {
  const [user, setUser] = useState({
    username: "",
    name: "",
    avatar_url: "",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <Navigation />

          <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/reviews/:category" element={<ReviewList />} />
            <Route path="/review/:review_id" element={<ReviewDetail />} />
            <Route path="/change_user" element={<ChangeUser />} />
            <Route path="/*" element={<p>404 page not found</p>} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
