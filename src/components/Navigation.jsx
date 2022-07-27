import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/change_user">Change User</Link>
    </nav>
  );
}

export default Navigation;
