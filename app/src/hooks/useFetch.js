import { useState } from 'react';

function UseFetch() {
  const [data, setData] = useState([]);
  const [error,setError] = useState([])

  async function getData() {
    const token = localStorage.getItem('token')

    try {
      const response = await fetch('http://127.0.0.1:8000/currencies/add/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      });

      if (!response.ok) {
        // console.log(response.statusText);
        setError(response.statusText)
        return;
      }

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('An error occurred while fetching data:', error.message);
    }
  }

  return { data, getData ,error};
}

export default UseFetch;
