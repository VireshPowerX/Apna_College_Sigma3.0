import React, { useState } from 'react';

const TransactionSearch = ({ transactions, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    onSearch(filteredTransactions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default TransactionSearch;
