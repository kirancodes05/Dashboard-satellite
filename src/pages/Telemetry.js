import React, { useState, useEffect } from 'react';

function Telemetry() {
  const [data, setData] = useState({
    signalStrength: 98,
    dataRate: 142,
    cpuUsage: 38,
    memoryUsage: 61,
    temperature: 22,
    batteryDrain: 14,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        signalStrength: Math.floor(Math.random() * 10) + 90,
        dataRate: Math.floor(Math.random() * 30) + 130,
        cpuUsage: Math.floor(Math.random() * 20) + 30,
        memoryUsage: Math.floor(Math.random() * 15) + 55,
        temperature: Math.floor(Math.random() * 8) + 18,
        batteryDrain: Math.floor(Math.random() * 5) + 12,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="page-title">Live Telemetry</h2>

      <div className="section">
        <div className="section-title">Real-Time Data — Updates every 2 seconds</div>

        <div className="telemetry-bar">
          <div className="bar-label"><span>Signal Strength</span><span>{data.signalStrength}%</span></div>
          <div className="bar-track"><div className="bar-fill" style={{width: `${data.signalStrength}%`}}></div></div>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label"><span>CPU Usage</span><span>{data.cpuUsage}%</span></div>
          <div className="bar-track"><div className="bar-fill" style={{width: `${data.cpuUsage}%`}}></div></div>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label"><span>Memory Usage</span><span>{data.memoryUsage}%</span></div>
          <div className="bar-track"><div className="bar-fill" style={{width: `${data.memoryUsage}%`}}></div></div>
        </div>

        <div className="telemetry-bar">
          <div className="bar-label"><span>Battery Drain Rate</span><span>{data.batteryDrain}%/hr</span></div>
          <div className="bar-track"><div className="bar-fill" style={{width: `${data.batteryDrain * 5}%`}}></div></div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="card-label">Data Rate</div>
          <div className="card-value">{data.dataRate}</div>
          <div className="card-unit">Mbps Downlink</div>
        </div>
        <div className="card">
          <div className="card-label">Payload Temp</div>
          <div className="card-value green">{data.temperature}°C</div>
          <div className="card-unit">Live Reading</div>
        </div>
      </div>
    </div>
  );
}

export default Telemetry;