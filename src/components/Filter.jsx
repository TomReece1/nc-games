import { Link } from "react-router-dom";

function Filter() {
  return (
    <div>
      <h2>Filter by Category:</h2>
      <nav>
        <Link to="/">All</Link>
        <Link to="/reviews/dexterity">Dexterity</Link>
        <Link to="/reviews/hidden-roles">Hidden Roles</Link>
        <Link to="/reviews/strategy">Strategy</Link>
        <Link to="/reviews/deck-building">Deck Building</Link>
        <Link to="/reviews/engine-building">Engine Building</Link>
        <Link to="/reviews/push-your-luck">Push Your Luck</Link>
        <Link to="/reviews/roll-and-write">Roll and Write</Link>
      </nav>
    </div>
  );
}
export default Filter;
