'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [from, setFrom] = useState('');
  const [seatClass, setSeatClass] = useState('Creative');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/ticket?from=${from}&class=${seatClass}`);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold">Book Your Flight to Lundin</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left font-medium">From</label>
            <input
              type="text"
              placeholder="Earth, NYC, London..."
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium">Class</label>
            <select
              value={seatClass}
              onChange={(e) => setSeatClass(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Creative">Creative</option>
              <option value="First-Class Inspiration">First-Class Inspiration</option>
              <option value="Vibes Only">Vibes Only</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Book Flight
          </button>
        </form>
      </div>
    </div>
  );
}
