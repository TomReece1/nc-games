import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import axios from "axios";
//Here we need the context and we're gonna need to useContext
//This is also where we need out api helper function

function ChangeUser() {
  const [users, setUsers] = useState([]);
  //New state that is all possible user profiles
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);
  //Grab and use context and destructure the setUser function part only
  const usersCopy = [...users];

  function displayUsers(username) {
    console.log(usersCopy);
    for (let i = 0; i < usersCopy.length; i++) {
      if (usersCopy[i].username === username) {
        usersCopy[i].kudos++;
      }
      console.log(usersCopy[i]);
    }
    setUsers(usersCopy);
  }

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
            const isMe = profile.username === user.username;
            return (
              <li key={index}>
                <h3>{profile.username}</h3>
                <img src={profile.avatar_url} alt={profile.username} />
                <p>{profile.kudos}</p>
                <button
                  onClick={() => {
                    setUser(profile);
                  }}
                >
                  select
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ChangeUser;
