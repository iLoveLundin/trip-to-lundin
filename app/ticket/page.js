'use client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function TicketPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Passenger';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <TicketContent name={name} />
    </div>
  );
}

function TicketContent({ name }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full border-4 border-dashed border-indigo-300"
    >
      <h2 className="text-xl font-bold text-indigo-700 mb-2 text-center">🎟️ Boarding Pass</h2>
      <p className="text-gray-700 font-semibold">Passenger: <span className="text-indigo-600">{name}</span></p>
      <p className="text-gray-700">Flight: TL2025</p>
      <p className="text-gray-700">Departure: Earth</p>
      <p className="text-gray-700">Destination: Mind of iLoveLundin</p>
      <p className="text-gray-700 mt-2">Seat: Unlimited</p>
      <p className="text-gray-700">Class: Creative</p>
      <p className="text-sm text-center mt-4 text-gray-500 italic">Welcome aboard the Trip to Lundin ✈️</p>
    </motion.div>
  );
}
