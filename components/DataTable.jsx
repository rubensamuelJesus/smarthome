"use client";

import { useState, useEffect } from 'react';

const DataTable = ({ endpoint, filters }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [pageCursor, setPageCursor] = useState(null);
  const [pageSize] = useState(10);
  const columnOrder = ['email', 'isAdmin', /* outras colunas */];

  useEffect(() => {
    fetchData();
  }, [filters, sortBy, sortDirection]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `${endpoint}?`;

      if (Object.keys(filters).length > 0) {
        const filterParams = new URLSearchParams(filters);
        url += filterParams.toString() + '&';
      }

      if (sortBy) {
        url += `sortBy=${sortBy}&sortDirection=${sortDirection}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error('Erro ao obter dados');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
    setLoading(false);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="p-6">
      <table className="w-full border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-800 text-white"> {/* Aqui está a mudança */}
            {columnOrder.map((key, index) => (
              <th key={index} className="border border-gray-800 px-4 py-2" onClick={() => handleSort(key)}>
                {key} {sortBy === key && (
                  sortDirection === 'asc' ? '↑' : '↓'
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columnOrder.length} className="text-center py-4">Loading...</td>
            </tr>
          ) : (
            sortedData.map((item, index) => (
              <tr key={index}>
                {columnOrder.map((key, index) => (
                  <td key={index} className="border border-gray-800 px-4 py-2">
                    {typeof item[key] === 'boolean' ? (item[key] ? 'Yes' : 'No') : item[key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
