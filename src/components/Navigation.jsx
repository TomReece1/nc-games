import { Link } from "react-router-dom";

function Navigation({ className }) {
  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      <Link to="/change_user">Change User</Link>
    </nav>
  );
}

export default Navigation;
