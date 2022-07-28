import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";


function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <header>
      <h1>NC Games</h1>
      {(user.username && (
        <div>
          <h3>Welcome {user.username}</h3>
          <button
            onClick={() => {
              setUser({});
            }}
          >
            Log Out
          </button>
        </div>
      )) || (
        <Link to="/change_user">
          <h3>Please Log in</h3>
        </Link>
      )}
    </header>
  );
}
export default Header;
