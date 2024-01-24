import React, { useState } from 'react'

function UseLogin() {
    const [data, setData] = useState([]);

    async function login(userData) {
      try {
        const response = await fetch('http://127.0.0.1:8000/authentication/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
             username:userData.username,
             password:userData.password
  
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
  
    return { data, login };
}

export default UseLogin
