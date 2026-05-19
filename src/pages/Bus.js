import React from 'react';

function Bus() {
  return (
    <div>
      <h2 className="page-title">Bus Systems</h2>

      <div className="grid">
        <div className="card">
          <div className="card-label">Battery Level</div>
          <div className="card-value green">87%</div>
          <div className="card-unit">Charging via Solar</div>
        </div>
        <div className="card">
          <div className="card-label">Solar Power</div>
          <div className="card-value">142W</div>
          <div className="card-unit">Generated</div>
        </div>
        <div className="card">
          <div className="card-label">CPU Temperature</div>
          <div className="card-value yellow">38°C</div>
          <div className="card-unit">Normal Range</div>
        </div>
        <div className="card">
          <div className="card-label">Attitude Control</div>
          <div className="card-value green">Stable</div>
          <div className="card-unit">3-Axis Stabilized</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Power Systems</div>
        <div className="data-row"><span className="data-key">Solar Panel A</span><span className="data-val green">72W — Nominal</span></div>
        <div className="data-row"><span className="data-key">Solar Panel B</span><span className="data-val green">70W — Nominal</span></div>
        <div className="data-row"><span className="data-key">Battery Voltage</span><span className="data-val">28.4V</span></div>
        <div className="data-row"><span className="data-key">Power Consumption</span><span className="data-val">98W</span></div>
        <div className="data-row"><span className="data-key">Power Budget</span><span className="data-val green">Surplus 44W</span></div>
      </div>

      <div className="section">
        <div className="section-title">Communication Systems</div>
        <div className="data-row"><span className="data-key">S-Band Uplink</span><span className="data-val green">Active</span></div>
        <div className="data-row"><span className="data-key">X-Band Downlink</span><span className="data-val green">Active</span></div>
        <div className="data-row"><span className="data-key">Ground Station</span><span className="data-val">Hyderabad — ISRO</span></div>
        <div className="data-row"><span className="data-key">Last Contact</span><span className="data-val">2 mins ago</span></div>
        <div className="data-row"><span className="data-key">Next Pass</span><span className="data-val yellow">18 mins</span></div>
      </div>
    </div>
  );
}

export default Bus;