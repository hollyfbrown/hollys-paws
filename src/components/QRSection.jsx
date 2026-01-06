// src/components/QRSection.jsx
import React, { useEffect } from 'react';

const CALENDLY_SRC = "https://assets.calendly.com/assets/external/widget.js";

export default function QRSection() {
  useEffect(() => {
    // avoid adding the script multiple times
    if (!document.querySelector(`script[src="${CALENDLY_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="p-10 text-center bg-green-50">
      <h2 className="text-3xl font-bold mb-4">Book in Seconds</h2>
      <p className="mb-6">Scan the QR code or use the booking widget below!</p>

      {/* Place a QR file in public/qr-code.png or update the path */}
      <img src="/qr-code.png" alt="Scan to book" className="mx-auto mb-6 w-48 h-48" />

      {/* Calendly widget: replace data-url if you want a different link */}
      <div
        className="calendly-inline-widget mx-auto"
        data-url="https://calendly.com/hollyspaws"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  );
}
