import React from 'react';
import { Typography, Divider } from '@mui/material';
import URLCard from '../components/URLCard';

const mockStats = JSON.parse(localStorage.getItem('url-stats') || '[]');

const StatisticsPage = () => (
  <div>
    <Typography variant="h5" gutterBottom>Statistics</Typography>
    <Divider sx={{ mb: 2 }} />
    {mockStats.length ? (
      mockStats.map((entry, i) => <URLCard key={i} {...entry} />)
    ) : (
      <Typography>No stats available.</Typography>
    )}
  </div>
);

export default StatisticsPage;