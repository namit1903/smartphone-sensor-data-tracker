import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SensorData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:3000/api/data')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Sensor Data</h1>
            <p>{data ? JSON.stringify(data) : "No data available"}</p>
        </div>
    );
};

export default SensorData;
