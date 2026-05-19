import React from 'react';

function Overview() {
  return (
    <div>
      <h2 className="page-title">Mission Overview</h2>

      <div className="grid">
        <div className="card">
          <div className="card-label">Altitude</div>
          <div className="card-value">542</div>
          <div className="card-unit">km above Earth</div>
        </div>
        <div className="card">
          <div className="card-label">Orbital Speed</div>
          <div className="card-value">7.6</div>
          <div className="card-unit">km/s</div>
        </div>
        <div className="card">
          <div className="card-label">Signal Strength</div>
          <div className="card-value green">98%</div>
          <div className="card-unit">Strong</div>
        </div>
        <div className="card">
          <div className="card-label">Mission Day</div>
          <div className="card-value yellow">142</div>
          <div className="card-unit">of 365</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Satellite Info</div>
        <div className="data-row"><span className="data-key">Satellite Name</span><span className="data-val">KIRAN-1</span></div>
        <div className="data-row"><span className="data-key">Launch Date</span><span className="data-val">12 Jan 2025</span></div>
        <div className="data-row"><span className="data-key">Orbit Type</span><span className="data-val">Low Earth Orbit (LEO)</span></div>
        <div className="data-row"><span className="data-key">Inclination</span><span className="data-val">98.5°</span></div>
        <div className="data-row"><span className="data-key">Overall Status</span><span className="data-val green">Nominal</span></div>
      </div>
    </div>
  );
}

export default Overview;