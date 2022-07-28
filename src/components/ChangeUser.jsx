import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { Link } from "react-router-dom";

function ChangeUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://tr-games-api.herokuapp.com/api/users").then((res) => {
      setUsers(res.data.users);
      setIsLoading(false);
    });
  }, []);

  function checkBoxes() {
    const boxes = document.querySelectorAll(".userCard");

    const triggerBottom = window.innerHeight * 0.8;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);

  return (
    <main>
      <h3>Choose a user:</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((profile, index) => {
            return (
              <li className="userCard show" key={index}>
                <h4>{profile.username}</h4>
                <img src={profile.avatar_url} alt={profile.username} />
                <p>{profile.kudos}</p>
                <Link to="/">
                  <button
                    onClick={() => {
                      setUser(profile);
                    }}
                  >
                    select
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

export default ChangeUser;
