import React, { useState, useEffect, useRef } from 'react';

function Telemetry({ fetchCount, setFetchCount, lastUpdated, setLastUpdated }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  const previousData = useRef(null);

  const fetchData = () => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.47&current=temperature_2m,windspeed_10m,relativehumidity_2m,surface_pressure,weathercode')
      .then(res => res.json())
      .then(result => {
        const current = result.current;
        const newData = {
          temperature: current.temperature_2m,
          windSpeed: current.windspeed_10m,
          humidity: current.relativehumidity_2m,
          pressure: current.surface_pressure,
        };

        // Only update state if data actually changed!
        if (JSON.stringify(newData) !== JSON.stringify(previousData.current)) {
          setData(newData);
          previousData.current = newData;
          setLastUpdated(new Date().toLocaleTimeString());
        }
        
        setFetchCount(prev => prev + 1);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    intervalRef.current = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  if (loading) return <div className="page-title">Fetching Live Telemetry...</div>;

  return (
    <div>
      <h2 className="page-title">Live Telemetry</h2>

      <div className="section">
        <div className="section-title">
          Real-Time Atmospheric Data — Updates every 5 seconds
          <span style={{ float: 'right', color: '#00ff88' }}>
            ● Live — {fetchCount} updates
          </span>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label">
            <span>Thermal Sensor Reading</span>
            <span>{data.temperature}°C</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${Math.min(data.temperature + 50, 100)}%` }}></div>
          </div>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label">
            <span>Atmospheric Drag</span>
            <span>{data.windSpeed} km/h</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${Math.min(data.windSpeed, 100)}%` }}></div>
          </div>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label">
            <span>Moisture Interference</span>
            <span>{data.humidity}%</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${data.humidity}%` }}></div>
          </div>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label">
            <span>Atmospheric Pressure</span>
            <span>{data.pressure} hPa</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${Math.min((data.pressure / 1100) * 100, 100)}%` }}></div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="card-label">Thermal Reading</div>
          <div className="card-value green">{data.temperature}°C</div>
          <div className="card-unit">Live Sensor</div>
        </div>
        <div className="card">
          <div className="card-label">Atmospheric Drag</div>
          <div className="card-value">{data.windSpeed}</div>
          <div className="card-unit">km/h</div>
        </div>
        <div className="card">
          <div className="card-label">Moisture Level</div>
          <div className="card-value yellow">{data.humidity}%</div>
          <div className="card-unit">Interference</div>
        </div>
        <div className="card">
          <div className="card-label">Pressure</div>
          <div className="card-value">{data.pressure}</div>
          <div className="card-unit">hPa</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Performance Info</div>
        <div className="data-row"><span className="data-key">Data Source</span><span className="data-val green">Live API</span></div>
        <div className="data-row"><span className="data-key">Poll Interval</span><span className="data-val">5 seconds</span></div>
        <div className="data-row"><span className="data-key">Last Updated</span><span className="data-val green">{lastUpdated}</span></div>
        <div className="data-row"><span className="data-key">Total Fetches</span><span className="data-val">{fetchCount}</span></div>
        
      </div>
    </div>
  );
}

export default Telemetry;