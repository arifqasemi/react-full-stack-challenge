import { useState } from 'react';

function UseFetch() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch('http://127.0.0.1:8000/currencies/add/', {
        method: 'GET',
        // Headers should not include 'Access-Control-Allow-Origin'
        headers: {
          'Content-Type': 'application/json',
          // Add other headers as needed
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch data. Server responded with:', response.statusText);
        return;
      }

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('An error occurred while fetching data:', error.message);
    }
  }

  return { data, getData };
}

export default UseFetch;
