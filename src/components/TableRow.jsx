import { formatNumber, formatSmaller } from "../utils/formatNumber";

export default function TableRow({ entry }) {
  const { date, revenue, netIncome, grossProfit, eps, operatingIncome } = entry;

  return (
    <tr className="bg-white">
      <td className="border px-4 py-2">{date}</td>
      <td className="border px-4 py-2">{formatSmaller(revenue)}</td>
      <td className="border px-4 py-2">{formatSmaller(netIncome)}</td>
      <td className="border px-4 py-2">{formatSmaller(grossProfit)}</td>
      <td className="border px-4 py-2">{eps}</td>
      <td className="border px-4 py-2">{formatSmaller(operatingIncome)}</td>
    </tr>
  );
}
