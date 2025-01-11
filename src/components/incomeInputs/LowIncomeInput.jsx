import { formatNumber, formatSmaller } from "../../utils/formatNumber";

export default function LowIncomeInput({ lowIncome, handleLowIncomeChange }) {
  let currentIncome = 100000000000;
  let lowestIncome = 50000000000;

  const optionsArray = [];
  while (currentIncome >= lowestIncome) {
    optionsArray.push(
      <option key={currentIncome} value={currentIncome}>
        {formatSmaller(currentIncome)}
      </option>
    );
    currentIncome -= 1000000000;
  }

  return (
    <div className="text-xs">
      <label>From </label>
      <select
        name="lowIncome"
        value={lowIncome}
        onChange={handleLowIncomeChange}
      >
        {optionsArray}
      </select>
    </div>
  );
}
