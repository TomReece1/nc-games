import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReviewList from "./components/ReviewList";
import ReviewDetail from "./components/ReviewDetail";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ChangeUser from "./components/ChangeUser";

import { UserContext } from "./contexts/User";

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
