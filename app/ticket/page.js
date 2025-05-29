'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function formatTimeLeft(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

function TicketContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';

  // Countdown logic (e.g., to release time)
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    window.print(); // Simple printable ticket
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        background: '#f3f4f6',
        borderRadius: '1rem',
        maxWidth: '500px',
        margin: '4rem auto',
        boxShadow: '0 0 30px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎫 Your Ticket to Lundin</h1>
      <p style={{ fontSize: '1.25rem' }}>
        Welcome aboard, <strong>{name}</strong>!
      </p>

      <div style={{ margin: '1.5rem 0', fontSize: '1.2rem' }}>
        ⏱ Departure in: <strong>{formatTimeLeft(timeLeft)}</strong>
      </div>

      <button
        onClick={handleDownload}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          background: '#111827',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
      >
        Download Ticket
      </button>
    </motion.div>
  );
}

export default function TicketPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>Loading ticket...</div>}>
      <TicketContent />
    </Suspense>
  );
}

