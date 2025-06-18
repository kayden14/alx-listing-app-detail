// components/property/BookingSection.tsx

import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return isNaN(diff) || diff <= 0 ? 0 : diff;
  };

  const total = calculateNights() * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full rounded-md mt-1"
        />
      </div>

      <div className="mt-4">
        <label className="block">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full rounded-md mt-1"
        />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${total}</strong></p>
      </div>

      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
