// src/components/Services.jsx
import React from 'react';

export default function Services() {
  const services = [
    { name: "Dog Walking", desc: "30 or 60 min walks, safe & fun." },
    { name: "Pet Sitting", desc: "In-home care for dogs, cats & more." },
    { name: "Holiday Visits", desc: "Feeding, walking, and playtime while you’re away." }
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
