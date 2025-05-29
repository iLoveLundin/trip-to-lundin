'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function TicketContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div>
      <h1>🎫 Your Ticket to Lundin</h1>
      <p>Passenger: {name}</p>
    </div>
  );
}

export default function TicketPage() {
  return (
    <Suspense fallback={<div>Loading ticket...</div>}>
      <TicketContent />
    </Suspense>
  );
}