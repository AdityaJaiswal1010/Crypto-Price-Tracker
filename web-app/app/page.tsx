'use client';
import CryptoList from '../components/CryptoList';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <CryptoList />
    </div>
  );
}
