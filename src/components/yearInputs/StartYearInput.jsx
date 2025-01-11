export default function StartYearInput({ startYear, handleStartYearChange }) {
  let currentYear = new Date().getFullYear();
  let earliestYear = 2010;

  const optionsArray = [];
  while (currentYear >= earliestYear) {
    optionsArray.push(
      <option key={currentYear} value={currentYear}>
        {currentYear}
      </option>
    );
    currentYear--;
  }

  return (
    <div className="text-xs">
      <label>From </label>
      <select
        name="startYear"
        value={startYear}
        onChange={handleStartYearChange}
      >
        {optionsArray}
      </select>
    </div>
  );
}
