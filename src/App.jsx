// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import QRSection from './components/QRSection';

export default function App() {
  return (
    <div>
      <Hero />
      <Services />
      <QRSection />
    </div>
  );
}
