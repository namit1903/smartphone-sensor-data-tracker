// SensorData.js
import React from 'react';

// SensorData component to display time-series data
const SensorData = ({ data }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Accelerometer Data (Time Series)</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
        {data && data.length > 0 ? (
          data.map((entry, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
              <p><strong>Timestamp:</strong> {new Date(entry.timestamp).toLocaleString()}</p>
              <p><strong>X:</strong> {entry.x}</p>
              <p><strong>Y:</strong> {entry.y}</p>
              <p><strong>Z:</strong> {entry.z}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default SensorData;
