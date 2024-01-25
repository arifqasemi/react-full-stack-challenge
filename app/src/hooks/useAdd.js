import { useState } from 'react';

function UseAdd() {
  const [data, setData] = useState([]);

  async function addData(newData) {
    console.log(newData)
    try {
      const response = await fetch('https://pythonapi.arifsultani291.digital/currencies/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            base:newData.base,
            counter:newData.counter,
            rate:newData.rate,
            token:'da4f91b6a6347056c35ef6246c39e4c66d8e0ade'

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
