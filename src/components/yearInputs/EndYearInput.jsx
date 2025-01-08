export default function EndYearInput({ endYear, handleEndYearChange }) {
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
    <select name="endYear" value={endYear} onChange={handleEndYearChange}>
      {optionsArray}
    </select>
  );
}