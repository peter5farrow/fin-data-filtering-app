import formatNumber from "../utils/formatNumber";

export default function TableRow({ entry }) {
  const { date, revenue, netIncome, grossProfit, eps, operatingIncome } = entry;

  return (
    <tr>
      <td>{date}</td>
      <td>{formatNumber(revenue)}</td>
      <td>{formatNumber(netIncome)}</td>
      <td>{formatNumber(grossProfit)}</td>
      <td>{eps}</td>
      <td>{formatNumber(operatingIncome)}</td>
    </tr>
  );
}
