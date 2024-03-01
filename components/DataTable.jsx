"use client";

import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import { db } from '/firebase/config';

const DataTable = ({ endpoint , filters }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [pageCursor, setPageCursor] = useState(null);
  const [pageSize] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log("aararar");
      const jsonData = await response.json(); // Aguarda a resolução da Promise para obter os dados reais
      console.log(jsonData); // Exibe os dados reais recebidos da resposta JSON
      console.log("aararar");
  
      if (response.ok) {
        setData(jsonData);
      } else {
        throw new Error('Erro ao obter dados dos usuários');
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

  return (
    <div className="p-6">
      <table className="w-full border-collapse border border-gray-800">
        {/* Table header */}
        <thead>
          <tr className="bg-gray-200">
            {/* Render column headers based on the first item in data */}
            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
              <th key={index} className="border border-gray-800 px-4 py-2">{key}</th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={data.length > 0 ? Object.keys(data[0]).length : 1} className="text-center py-4">Loading...</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                {/* Render table cells based on the keys in the first item */}
                {Object.keys(item).map((key, index) => (
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