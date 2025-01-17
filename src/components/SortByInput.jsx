export default function SortByInput({ sortBy, handleSortByChange }) {
  return (
    <div className="relative top-2/3">
      <label>Sort by: </label>
      <select name="sortByInput" value={sortBy} onChange={handleSortByChange}>
        <option value="dateDes">Date (New - Old)</option>
        <option value="dateAsc">Date (Old - New)</option>
        <option value="revDes">Revenue (High - Low)</option>
        <option value="revAsc">Revenue (Low - High)</option>
        <option value="incDes">Net Income (High - Low)</option>
        <option value="incAsc">Net Income (Low - High)</option>
      </select>
    </div>
  );
}
