import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const URLCard = ({ longUrl, shortUrl, expiry }) => (
  <Card sx={{ mt: 2 }}>
    <CardContent>
      <Typography variant="body1"><strong>Original:</strong> {longUrl}</Typography>
      <Typography variant="body2"><strong>Short:</strong> <a href={shortUrl} target="_blank">{shortUrl}</a></Typography>
      <Typography variant="body2" color="text.secondary"><strong>Expires at:</strong> {expiry}</Typography>
    </CardContent>
  </Card>
);

export default URLCard;