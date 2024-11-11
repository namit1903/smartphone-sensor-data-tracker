// SensorData.js
import React from 'react';

// SensorData component to display time-series data
const SensorData = ({ data }) => {
  console.log("hii",data.data)
  data=data.data;
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Accelerometer Data (Time Series)</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
  {data && data.length > 0 ? (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
      <thead>
        <tr style={{ backgroundColor: '#4d7f87', textAlign: 'left' }}>
          <th style={{ padding: '8px', border: '1px solid #ccc' }}>Timestamp</th>
          <th style={{ padding: '8px', border: '1px solid #ccc' }}>X</th>
          <th style={{ padding: '8px', border: '1px solid #ccc' }}>Y</th>
          <th style={{ padding: '8px', border: '1px solid #ccc' }}>Z</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index} style={{ textAlign: 'left' }}>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{new Date(entry.timestamp).toLocaleString()}</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{entry.x}</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{entry.y}</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>{entry.z}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No data available</p>
  )}
</div>
    </div>
  );
};

export default SensorData;
