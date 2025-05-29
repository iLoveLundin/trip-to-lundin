'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function TicketContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full border-4 border-dashed border-indigo-300">
        <h2 className="text-center text-2xl font-bold text-indigo-800 mb-6">
          🎫 Boarding Pass
        </h2>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Passenger</span>
            <span className="text-gray-900">{name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Flight</span>
            <span className="text-gray-900">LNDN 777</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Gate</span>
            <span className="text-gray-900">C3</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Destination</span>
            <span className="text-gray-900">🧠 Mind of iLoveLundin</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            Save this page — your trip has begun.
          </p>
        </div>
      </div>
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
