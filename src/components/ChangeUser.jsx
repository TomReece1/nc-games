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

  return (
    <section>
      <h2>Choose a user:</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((profile, index) => {
            return (
              <li key={index}>
                <h3>{profile.username}</h3>
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
    </section>
  );
}

export default ChangeUser;
