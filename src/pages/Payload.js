import React from 'react';

function Payload() {
  return (
    <div>
      <h2 className="page-title">Payload Systems</h2>

      <div className="grid">
        <div className="card">
          <div className="card-label">Camera Resolution</div>
          <div className="card-value green">0.5m</div>
          <div className="card-unit">Ground Sample Distance</div>
        </div>
        <div className="card">
          <div className="card-label">Images Captured</div>
          <div className="card-value">4,821</div>
          <div className="card-unit">Total this mission</div>
        </div>
        <div className="card">
          <div className="card-label">Storage Used</div>
          <div className="card-value yellow">67%</div>
          <div className="card-unit">of 512 GB</div>
        </div>
        <div className="card">
          <div className="card-label">Payload Temp</div>
          <div className="card-value green">22°C</div>
          <div className="card-unit">Operating Range: -10 to 40°C</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Instrument Status</div>
        <div className="data-row"><span className="data-key">Optical Camera</span><span className="data-val green">Active</span></div>
        <div className="data-row"><span className="data-key">Infrared Sensor</span><span className="data-val green">Active</span></div>
        <div className="data-row"><span className="data-key">SAR Antenna</span><span className="data-val yellow">Standby</span></div>
        <div className="data-row"><span className="data-key">Spectrometer</span><span className="data-val green">Active</span></div>
        <div className="data-row"><span className="data-key">Data Transmitter</span><span className="data-val green">Transmitting</span></div>
      </div>

      <div className="section">
        <div className="section-title">Mission Objectives</div>
        <div className="data-row"><span className="data-key">Land Mapping</span><span className="data-val green">On Track</span></div>
        <div className="data-row"><span className="data-key">Ocean Monitoring</span><span className="data-val green">On Track</span></div>
        <div className="data-row"><span className="data-key">Atmospheric Study</span><span className="data-val yellow">In Progress</span></div>
        <div className="data-row"><span className="data-key">Disaster Monitoring</span><span className="data-val green">Active</span></div>
      </div>
    </div>
  );
}

export default Payload;