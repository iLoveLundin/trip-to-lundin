'use client';
import { useSearchParams } from 'next/navigation';

export default function Ticket() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const seatClass = searchParams.get('class');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center space-y-6">
        <h2 className="text-xl font-bold">Your Boarding Pass</h2>
        <div className="text-left space-y-2">
          <p><strong>From:</strong> {from || 'Unknown'}</p>
          <p><strong>To:</strong> Lundin</p>
          <p><strong>Seat Class:</strong> {seatClass || 'Creative'}</p>
          <p><strong>Flight:</strong> LNDN-777</p>
          <p><strong>Gate:</strong> VIBES</p>
        </div>
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 mt-4"
        >
          Pre-Save EP (Coming Soon)
        </a>
      </div>
    </div>
  );
}
