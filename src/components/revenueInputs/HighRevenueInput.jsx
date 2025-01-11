import { formatNumber, formatSmaller } from "../../utils/formatNumber";

export default function HighRevenueInput({
  highRevenue,
  handleHighRevenueChange,
}) {
  let currentRevenue = 500000000000;
  let lowestRevenue = 200000000000;

  const optionsArray = [];
  while (currentRevenue >= lowestRevenue) {
    optionsArray.push(
      <option key={currentRevenue} value={currentRevenue}>
        {formatSmaller(currentRevenue)}
      </option>
    );
    currentRevenue -= 10000000000;
  }

  return (
    <div className="text-xs">
      <label> to </label>
      <select
        name="highRevenue"
        value={highRevenue}
        onChange={handleHighRevenueChange}
      >
        {optionsArray}
      </select>
    </div>
  );
}
