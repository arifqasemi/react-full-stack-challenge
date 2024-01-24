import { useState } from 'react';

function UseAdd() {
  const [data, setData] = useState([]);

  async function addData(newData) {
    console.log(newData)
    try {
      const response = await fetch('http://127.0.0.1:8000/currencies/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${newData.token}`,
        },
        body:JSON.stringify({
            base:newData.base,
            counter:newData.counter,
            rate:newData.rate

        })
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

  return { data, addData };
}

export default UseAdd;
