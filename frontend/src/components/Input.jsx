// UsernameInput.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SensorData from './SensorData';

// Function to fetch accelerometer data based on the username
const fetchAccelerometerData = async (username) => {
  const response = await axios.get(`http://localhost:5000/api/accelerometer-data?username=${username}`);
  
  if (response.status !== 200) throw new Error('Error fetching data');
  return response.data;
};

const UsernameInput = () => {
  const [username, setUsername] = useState('');
  const [fetchingData, setFetchingData] = useState(false);

  // TanStack Query to fetch data based on the username entered
  const { data, isLoading, error } = useQuery({
    queryKey: ['accelerometerData', username],
    queryFn: () => fetchAccelerometerData(username),
    enabled: fetchingData && username.trim().length > 0,
    onSuccess: () => setFetchingData(false),
    onError: () => setFetchingData(false),
  });

  // Handle input change
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle button click to fetch data
  const handleButtonClick = () => {
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }
    setFetchingData(true); // Start fetching data when the button is clicked
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter username" 
        value={username} 
        onChange={handleInputChange} 
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button 
        onClick={handleButtonClick} 
        style={{ marginLeft: '10px', padding: '8px 16px', fontSize: '16px' }}
      >
        Get Data
      </button>

      {/* Displaying Loading, Error or Data */}
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error fetching data: {error.message}</p>}
      {data && <SensorData data={data} name={username} />}
    </div>
  );
};

export default UsernameInput;