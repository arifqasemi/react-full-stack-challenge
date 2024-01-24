import React, { useState } from 'react'

function UseDelete() {
    const [result, setResult] = useState([]);

    async function deleteData(data) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/currencies/delete/${data.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${data.token}`,
          },
        
        });
  
        if (!response.ok) {
          console.error('Failed to fetch data. Server responded with:', response.statusText);
          return;
        }
  
        const jsonData = await response.json();
        setResult(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('An error occurred while fetching data:', error.message);
      }
    }
  
    return { result, deleteData };
}

export default UseDelete
