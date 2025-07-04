import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';
import RedirectPage from './pages/RedirectPage'; // NEW
import Header from './components/Header';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="md">
      <Header />
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/:shortcode" element={<RedirectPage />} /> {/* <-- Dynamic */}
      </Routes>
    </Container>
  );
};

export default App;
