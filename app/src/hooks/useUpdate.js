import { useState } from 'react';

function UseUpdate() {
  const [updatedData, setUpdatedData] = useState([]);

  async function updateData(newData) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/currencies/update/${newData.id}`, {
        method: 'POST',
        // Headers should not include 'Access-Control-Allow-Origin'
        headers: {
          'Content-Type': 'application/json',
          // Add other headers as needed
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
      setUpdatedData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('An error occurred while fetching data:', error.message);
    }
  }

  return { updatedData, updateData };
}

export default UseUpdate;
