export default function StartYearInput({ startYear, setStartYear }) {
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
    <select name="startYear" value={startYear} onChange={setStartYear}>
      {optionsArray}
    </select>
  );
}
