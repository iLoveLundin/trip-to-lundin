'use client';

import { useState } from "react";
import { format } from "date-fns";

export default function TripToLundin() {
  const [name, setName] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [flightBooked, setFlightBooked] = useState(false);

  const handleBooking = () => {
    setFlightBooked(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Trip to Lundin ✈️</h1>
        {!flightBooked ? (
          <div className="space-y-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <p className="mb-2 font-semibold">Departure Date</p>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={departureDate.toISOString().substring(0, 10)}
                onChange={(e) => setDepartureDate(new Date(e.target.value))}
              />
            </div>
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
              onClick={handleBooking}
              disabled={!name}
            >
              Book Flight
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <p className="text-lg font-semibold">Boarding Pass</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>Passenger: <strong>{name}</strong></p>
              <p>Flight: iLNDN-2025</p>
              <p>Gate: Spotify</p>
              <p>Departure: {format(departureDate, "PPP")}</p>
            </div>
            <a
              href="https://your-presave-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                Pre-Save EP
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
