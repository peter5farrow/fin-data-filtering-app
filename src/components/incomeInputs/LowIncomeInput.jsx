import formatNumber from "../../utils/formatNumber";

export default function LowIncomeInput({ lowIncome, handleLowIncomeChange }) {
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
    <select name="lowIncome" value={lowIncome} onChange={handleLowIncomeChange}>
      {optionsArray}
    </select>
  );
}
