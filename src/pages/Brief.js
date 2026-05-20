import React, { useState, useEffect } from 'react';

function Brief() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   fetch(`https://api.nasa.gov/planetary/apod?api_key=d7NTMYG80wDyoCWJ1MGS8K46HEm19towi98Wceu6`)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="page-title">Loading Mission Brief...</div>;
  if (error) return <div className="page-title">{error}</div>;

  return (
    <div>
      <h2 className="page-title">Mission Brief</h2>

      <div className="section">
        <div className="section-title">{data.date}</div>
        <h3 style={{ color: '#00d4ff', fontSize: '20px', marginBottom: '20px' }}>{data.title}</h3>

        {data.media_type === 'image' ? (
          <img
            src={data.url}
            alt={data.title}
            style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', maxHeight: '500px', objectFit: 'cover' }}
          />
        ) : (
          <iframe
            src={data.url}
            title={data.title}
            style={{ width: '100%', height: '400px', borderRadius: '8px', marginBottom: '20px', border: 'none' }}
          />
        )}

        {data.copyright && (
          <div className="data-row">
            <span className="data-key">Source</span>
            <span className="data-val">{data.copyright}</span>
          </div>
        )}

        <p style={{ color: '#a0b4c8', lineHeight: '1.8', marginTop: '20px', fontSize: '14px' }}>
          {data.explanation}
        </p>
      </div>
    </div>
  );
}

export default Brief;