import axios from "axios";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import StartYearInput from "./StartYearInput";

export default function DataTable() {
  const [finData, setFinData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2025);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchFinData = async () => {
      const res = await axios.get(
        `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`
      );
      setFinData(res.data);
      setApprovedData(res.data);
    };
    fetchFinData();
  }, []);

  // Filter by years
  useEffect(() => {
    const withinDateRange = [];
    finData.forEach((entry) => {
      const year = entry.date.split("-")[0];
      if (startYear <= year) {
        withinDateRange.push(entry);
      }
    });
    setApprovedData(withinDateRange);
  }, [startYear, endYear]);

  // Filter by revenue

  // Filter by net income

  const tableRows = approvedData.map((entry) => {
    return <TableRow key={entry.fillingDate} entry={entry} />;
  });

  const handleSelectChange = (event) => {
    setStartYear(event.target.value);
  };

  return (
    <div>
      <StartYearInput startYear={startYear} setStartYear={handleSelectChange} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Revenue</th>
            <th>Net Income</th>
            <th>Gross Profit</th>
            <th>Earnings Per Share</th>
            <th>Operating Income</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

//
// ■ Date (e.g., "2024-09-28")
// ■ Revenue
// ■ Net Income
// ■ Gross Profit
// ■ EPS (Earnings Per Share)
// ■ Operating Income
//
