import React, { useState } from 'react';

function UseFetch() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch('https://djangodrf.arifsultani291.digital/products/');

      if (!response.ok) {
        console.error('Failed to fetch data. Server responded with:', response.statusText);
        return;
      }

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('An error occurred while fetching data:', error.message);
    }
  }

  return { data, getData };
}

export default UseFetch;