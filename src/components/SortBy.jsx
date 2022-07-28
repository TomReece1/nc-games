function SortBy({ setSortColumn, setSortOrder }) {
  return (
    <div>
      <form>
        <label htmlFor="sortBy">Sort by:</label>
        <select
          id="sortBy"
          onChange={(e) => {
            setSortColumn(e.target.value);
          }}
        >
          <option value={"created_at"}>date</option>
          <option value={"votes"}>votes</option>
        </select>
        <select
          id="order"
          onChange={(e) => {
            setSortOrder(e.target.value);
          }}
        >
          <option value={"desc"}>descending</option>
          <option value={"asc"}>ascending</option>
        </select>
        <br />
      </form>
    </div>
  );
}
export default SortBy;
