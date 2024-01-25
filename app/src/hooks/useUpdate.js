import { useState } from 'react';

function UseUpdate() {
  const [updatedData, setUpdatedData] = useState([]);

  async function updateData(newData) {
    try {
      const response = await fetch(`https://pythonapi.arifsultani291.digital/currencies/update/${newData.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Token ${newData.token}`,
        },
        body:JSON.stringify({
            base:newData.base,
            counter:newData.counter,
            rate:newData.rate,
            token:newData.token

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
