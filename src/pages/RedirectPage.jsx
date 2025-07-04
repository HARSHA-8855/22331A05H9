import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const stats = JSON.parse(localStorage.getItem("url-stats") || "[]");
    const entry = stats.find((item) => item.shortUrl.endsWith(`/${shortcode}`));

    if (entry) {
      const now = new Date();
      const expiry = new Date(entry.expiry);

      if (now <= expiry) {
        window.location.href = entry.longUrl;
      } else {
        alert("❌ This short link has expired.");
      }
    } else {
      alert("❌ Invalid shortcode or link not found.");
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
