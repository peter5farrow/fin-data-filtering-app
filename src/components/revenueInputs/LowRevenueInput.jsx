import formatNumber from "../../utils/formatNumber";

export default function LowRevenueInput({
  lowRevenue,
  handleLowRevenueChange,
}) {
  let currentRevenue = 500000000000;
  let lowestRevenue = 200000000000;

  const optionsArray = [];
  while (currentRevenue >= lowestRevenue) {
    optionsArray.push(
      <option key={currentRevenue} value={currentRevenue}>
        {formatNumber(currentRevenue)}
      </option>
    );
    currentRevenue -= 10000000000;
  }

  return (
    <select
      name="lowRevenue"
      value={lowRevenue}
      onChange={handleLowRevenueChange}
    >
      {optionsArray}
    </select>
  );
}
