import { formatNumber, formatSmaller } from "../utils/formatNumber";

export default function TableRow({ entry }) {
  const { date, revenue, netIncome, grossProfit, eps, operatingIncome } = entry;

  return (
    <tr>
      <td>{date}</td>
      <td>{formatSmaller(revenue)}</td>
      <td>{formatSmaller(netIncome)}</td>
      <td>{formatSmaller(grossProfit)}</td>
      <td>{eps}</td>
      <td>{formatSmaller(operatingIncome)}</td>
    </tr>
  );
}
