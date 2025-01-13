import axios from "axios";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import SortByInput from "./SortByInput";
import StartYearInput from "./yearInputs/StartYearInput";
import EndYearInput from "./yearInputs/EndYearInput";
import LowRevenueInput from "./revenueInputs/LowRevenueInput";
import HighRevenueInput from "./revenueInputs/HighRevenueInput";
import LowIncomeInput from "./incomeInputs/LowIncomeInput";
import HighIncomeInput from "./incomeInputs/HighIncomeInput";
import Header from "./Header";

export default function DataTable() {
  const [finData, setFinData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [sortBy, setSortBy] = useState("dateDes");

  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2025);

  const [lowRevenue, setLowRevenue] = useState(200000000000);
  const [highRevenue, setHighRevenue] = useState(500000000000);

  const [lowIncome, setLowIncome] = useState(50000000000);
  const [highIncome, setHighIncome] = useState(100000000000);

  const apiKey = import.meta.env.VITE_API_KEY;

  // Fetch
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

  // Filter
  useEffect(() => {
    const withinRanges = [];
    finData.forEach((entry) => {
      const year = entry.date.split("-")[0];
      if (
        startYear <= year &&
        year <= endYear &&
        lowRevenue <= entry.revenue &&
        entry.revenue <= highRevenue &&
        lowIncome <= entry.netIncome &&
        entry.netIncome <= highIncome
      ) {
        withinRanges.push(entry);
      }
    });
    setApprovedData(withinRanges);
  }, [startYear, endYear, lowRevenue, highRevenue, lowIncome, highIncome]);

  // onChange handlers
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
  };
  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };
  const handleLowRevenueChange = (event) => {
    setLowRevenue(event.target.value);
  };
  const handleHighRevenueChange = (event) => {
    setHighRevenue(event.target.value);
  };
  const handleLowIncomeChange = (event) => {
    setLowIncome(event.target.value);
  };
  const handleHighIncomeChange = (event) => {
    setHighIncome(event.target.value);
  };

  // Sort
  switch (sortBy) {
    case "dateDes":
      approvedData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      break;
    case "dateAsc":
      approvedData.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      break;
    case "revDes":
      approvedData.sort((a, b) => {
        return b.revenue - a.revenue;
      });
      break;
    case "revAsc":
      approvedData.sort((a, b) => {
        return a.revenue - b.revenue;
      });
      break;
    case "incDes":
      approvedData.sort((a, b) => {
        return b.netIncome - a.netIncome;
      });
      break;
    case "incAsc":
      approvedData.sort((a, b) => {
        return a.netIncome - b.netIncome;
      });
      break;
  }

  //Rows
  const tableRows = approvedData.map((entry) => {
    return <TableRow key={entry.fillingDate} entry={entry} />;
  });

  // For styling without using up API calls
  // const emptyRows = [];
  // for (let i = 1; i <= 5; i++) {
  //   emptyRows.push(
  //     <TableRow
  //       key={i}
  //       entry={{
  //         date: i,
  //         revenue: i * 10000000000,
  //         netIncome: i * 10000000000,
  //         grossProfit: i * 10000000000,
  //         eps: 4.5,
  //         operatingIncome: i * 10000000000,
  //       }}
  //     />
  //   );
  // }

  if (tableRows.length === 0) {
    return (
      <div className="overflow-x-auto min-h-screen grid justify-items-center items-center">
        <Header />

        <div className="w-5/6 relative top-24 sm:top-0">
          <SortByInput
            sortBy={sortBy}
            handleSortByChange={handleSortByChange}
          />

          <table className="w-full h-1/2 mr-32 table-auto relative top-3 shadow-2xl">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Revenue</th>
                <th className="px-4 py-2 text-left">Net Income</th>
                <th className="px-4 py-2 text-left">Gross Profit</th>
                <th className="px-4 py-2 text-left">Earnings Per Share</th>
                <th className="px-4 py-2 text-left">Operating Income</th>
              </tr>
              <tr>
                <th>
                  <StartYearInput
                    startYear={startYear}
                    handleStartYearChange={handleStartYearChange}
                  />
                  <EndYearInput
                    endYear={endYear}
                    handleEndYearChange={handleEndYearChange}
                  />
                </th>
                <th>
                  <LowRevenueInput
                    lowRevenue={lowRevenue}
                    handleLowRevenueChange={handleLowRevenueChange}
                  />
                  <HighRevenueInput
                    highRevenue={highRevenue}
                    handleHighRevenueChange={handleHighRevenueChange}
                  />
                </th>
                <th>
                  <LowIncomeInput
                    lowIncome={lowIncome}
                    handleLowIncomeChange={handleLowIncomeChange}
                  />
                  <HighIncomeInput
                    highIncome={highIncome}
                    handleHighIncomeChange={handleHighIncomeChange}
                  />
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td>NO</td>
                <td>ITEMS</td>
                <td>MATCH</td>
                <td>YOUR</td>
                <td>SEARCH</td>
                <td>CRITERIA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto min-h-screen grid justify-items-center items-center">
      <Header />

      <div className="w-5/6 relative top-24 sm:top-0">
        <SortByInput sortBy={sortBy} handleSortByChange={handleSortByChange} />

        <table className="w-full h-1/2 mr-32 table-auto relative top-3 shadow-2xl">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Revenue</th>
              <th className="px-4 py-2 text-left">Net Income</th>
              <th className="px-4 py-2 text-left">Gross Profit</th>
              <th className="px-4 py-2 text-left">Earnings Per Share</th>
              <th className="px-4 py-2 text-left">Operating Income</th>
            </tr>
            <tr>
              <th>
                <StartYearInput
                  startYear={startYear}
                  handleStartYearChange={handleStartYearChange}
                />
                <EndYearInput
                  endYear={endYear}
                  handleEndYearChange={handleEndYearChange}
                />
              </th>
              <th>
                <LowRevenueInput
                  lowRevenue={lowRevenue}
                  handleLowRevenueChange={handleLowRevenueChange}
                />
                <HighRevenueInput
                  highRevenue={highRevenue}
                  handleHighRevenueChange={handleHighRevenueChange}
                />
              </th>
              <th>
                <LowIncomeInput
                  lowIncome={lowIncome}
                  handleLowIncomeChange={handleLowIncomeChange}
                />
                <HighIncomeInput
                  highIncome={highIncome}
                  handleHighIncomeChange={handleHighIncomeChange}
                />
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
