import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { isValidUrl, isAlphanumeric } from '../utils/validators';
import { useLogger } from '../context/LoggerContext';

const URLForm = ({ onShorten }) => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const { log } = useLogger();

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    urls.forEach((url, i) => {
      if (!isValidUrl(url.longUrl)) errors.push(`URL #${i + 1} is invalid`);
      if (url.shortcode && !isAlphanumeric(url.shortcode)) errors.push(`Shortcode #${i + 1} must be alphanumeric`);
      if (url.validity && isNaN(url.validity)) errors.push(`Validity #${i + 1} must be a number`);
    });

    if (errors.length) {
      alert(errors.join('\n'));
      return;
    }

    onShorten(urls);
    log('Shortening requested', urls);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>Enter URLs to Shorten</Typography>
        {urls.map((url, idx) => (
          <Grid container spacing={2} key={idx} sx={{ mb: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Long URL"
                fullWidth
                required
                value={url.longUrl}
                onChange={(e) => handleChange(idx, 'longUrl', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Validity (mins)"
                fullWidth
                value={url.validity}
                onChange={(e) => handleChange(idx, 'validity', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Custom Shortcode"
                fullWidth
                value={url.shortcode}
                onChange={(e) => handleChange(idx, 'shortcode', e.target.value)}
              />
            </Grid>
          </Grid>
        ))}
        <Button onClick={addField} disabled={urls.length >= 5}>+ Add More</Button>
        <Button variant="contained" type="submit" sx={{ ml: 2 }}>Shorten URLs</Button>
      </form>
    </Paper>
  );
};

export default URLForm;