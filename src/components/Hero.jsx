// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-green-100 p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Trusted Pet Sitting & Dog Walking in Cheshire</h1>
      <p className="text-lg mb-6">Because your pets deserve love, attention, and happy tails.</p>
      <a href="/booking" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Book a Walk / Sitting</a>
    </section>
  );
}
