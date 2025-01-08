export default function TableRow({ entry }) {
  const { date, revenue, netIncome, grossProfit, eps, operatingIncome } = entry;

  return (
    <tr>
      <td>{date}</td>
      <td>{revenue}</td>
      <td>{netIncome}</td>
      <td>{grossProfit}</td>
      <td>{eps}</td>
      <td>{operatingIncome}</td>
    </tr>
  );
}
