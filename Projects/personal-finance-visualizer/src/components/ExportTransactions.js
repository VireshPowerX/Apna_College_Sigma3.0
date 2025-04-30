import React from 'react';
import * as XLSX from 'xlsx';

const ExportTransactions = ({ transactions }) => {
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(transactions);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
    XLSX.writeFile(wb, 'transactions.xlsx');
  };

  return (
    <div>
      <button onClick={exportToCSV}>Export to Excel</button>
    </div>
  );
};

export default ExportTransactions;
