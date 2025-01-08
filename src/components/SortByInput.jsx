export default function SortByInput() {
  return (
    <div>
      <label>Sort by:</label>
      <select name="sortByInput">
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
