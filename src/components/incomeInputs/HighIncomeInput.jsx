import formatNumber from "../../utils/formatNumber";

export default function HighIncomeInput({
  highIncome,
  handleHighIncomeChange,
}) {
  let currentIncome = 100000000000;
  let lowestIncome = 50000000000;

  const optionsArray = [];
  while (currentIncome >= lowestIncome) {
    optionsArray.push(
      <option key={currentIncome} value={currentIncome}>
        {formatNumber(currentIncome)}
      </option>
    );
    currentIncome -= 1000000000;
  }

  return (
    <select
      name="highIncome"
      value={highIncome}
      onChange={handleHighIncomeChange}
    >
      {optionsArray}
    </select>
  );
}
