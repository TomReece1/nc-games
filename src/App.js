import "./App.css";
import ReviewList from "./components/ReviewList";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>NC Games</h1>
        <Filter />
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews/:category" element={<ReviewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
