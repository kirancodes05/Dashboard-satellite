import React from 'react';

function Logs() {
  const logs = [
    { time: '14:32:01', level: 'ok',   msg: 'Telemetry downlink established successfully' },
    { time: '14:28:45', level: 'info', msg: 'Orbital maneuver completed — altitude 542km' },
    { time: '14:15:22', level: 'ok',   msg: 'Solar panels recalibrated — output nominal' },
    { time: '13:58:10', level: 'warn', msg: 'CPU temperature spike detected — 48°C (resolved)' },
    { time: '13:45:33', level: 'ok',   msg: 'Image capture batch #4821 transmitted to ground' },
    { time: '13:30:17', level: 'info', msg: 'Ground station handover — Hyderabad to Bangalore' },
    { time: '13:12:05', level: 'ok',   msg: 'Battery charging cycle completed — 87%' },
    { time: '12:55:44', level: 'warn', msg: 'Signal dropout for 3s during orbital transition' },
    { time: '12:40:21', level: 'info', msg: 'SAR antenna switched to standby mode' },
    { time: '12:22:09', level: 'ok',   msg: 'Attitude control system — 3-axis lock confirmed' },
    { time: '12:05:55', level: 'info', msg: 'Scheduled maintenance check completed' },
    { time: '11:48:30', level: 'ok',   msg: 'Infrared sensor calibration successful' },
  ];

  return (
    <div>
      <h2 className="page-title">System Logs</h2>

      <div className="section">
        <div className="section-title">Recent Events</div>
        {logs.map((log, index) => (
          <div className="log-entry" key={index}>
            <span className="log-time">{log.time}</span>
            <span className={`log-level ${log.level}`}>{log.level.toUpperCase()}</span>
            <span className="log-msg">{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logs;