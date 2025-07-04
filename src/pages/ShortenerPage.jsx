import React, { useState } from 'react';
import URLForm from '../components/URLForm';
import URLCard from '../components/URLCard';

const ShortenerPage = () => {
  const [results, setResults] = useState([]);

  const onShorten = (urls) => {
    const existing = JSON.parse(localStorage.getItem("url-stats") || "[]");
  
    const newResults = urls.map((url) => {
      const shortcode = url.shortcode || Math.random().toString(36).substring(2, 8);
      const validity = parseInt(url.validity) || 30;
      const expiry = new Date(Date.now() + validity * 60000).toISOString();
  
      return {
        longUrl: url.longUrl,
        shortUrl: `http://localhost:3000/${shortcode}`,
        expiry,
      };
    });
  
    const updated = [...existing, ...newResults];
    localStorage.setItem("url-stats", JSON.stringify(updated));
    setResults(newResults);
  };
  

  return (
    <div>
      <URLForm onShorten={onShorten} />
      {results.map((res, idx) => (
        <URLCard key={idx} {...res} />
      ))}
    </div>
  );
};

export default ShortenerPage;