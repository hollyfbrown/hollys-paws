# create a new React project with Vite
npm create vite@latest hollys-paws
cd hollys-paws
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
@tailwind base;
@tailwind components;
@tailwind utilities;
export default function Hero() {
  return (
    <section className="bg-green-100 p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Trusted Pet Sitting & Dog Walking in Cheshire</h1>
      <p className="text-lg mb-6">Because your pets deserve love, attention, and happy tails.</p>
      <a href="/booking" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Book a Walk / Sitting</a>
    </section>
  );
}
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
import { useEffect } from "react";

export default function QRSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="p-10 text-center bg-green-50">
      <h2 className="text-3xl font-bold mb-4">Book in Seconds</h2>
      <p className="mb-6">Scan the QR code or use the booking widget below!</p>
      
      {/* Placeholder for your QR code image */}
      <img src="/qr-code.png" alt="Scan to book" className="mx-auto mb-6 w-48 h-48"/>

      {/* Embedded Calendly */}
      <div className="calendly-inline-widget" 
           data-url="https://calendly.com/your-hollys-paws-schedule" 
           style={{ minWidth: '320px', height: '700px' }}>
      </div>
    </section>
  );
}
import Hero from './components/Hero';
import Services from './components/Services';
import QRSection from './components/QRSection';

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <QRSection />
    </div>
  );
}

export default App;
