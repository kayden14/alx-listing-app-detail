// pages/index.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to ALX Listing App
        </h1>
        <p className="text-gray-600 mb-6">
          Discover beautiful properties from around the world. Find the perfect stay for your next trip.
        </p>
        <Link href="/property/CozyApartment">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore Property
          </button>
        </Link>
      </section>
    </main>
  );
}
