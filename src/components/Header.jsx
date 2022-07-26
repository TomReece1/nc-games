import { UserContext } from "../contexts/User";
import { useContext } from "react";

function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <header>
      <h1>NC Games</h1>
      {(user.username && <h3>Welcome {user.username}</h3>) || (
        <h3>Please Log in</h3>
      )}
      <button
        onClick={() => {
          setUser({});
        }}
      >
        Log Out
      </button>
    </header>
  );
}
export default Header;
