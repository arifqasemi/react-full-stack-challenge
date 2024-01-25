import { useState } from 'react';

function UseFetch() {
  const [data, setData] = useState([]);
  const [error,setError] = useState([])

  async function getData() {

    try {
      const token = localStorage.getItem('token')

      const response = await fetch('https://pythonapi.arifsultani291.digital/currencies/currencies/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
       
        },
        body:JSON.stringify({
          token:token
        })

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
