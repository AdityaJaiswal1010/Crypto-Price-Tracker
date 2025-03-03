'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '../services/cryptoService';
import useCryptoStore from '../store/useCryptoStore';
import { useState } from 'react';

export default function CryptoList() {
  const { search, setSearch } = useCryptoStore();
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 0, // Ensures refetch always pulls fresh data
    refetchOnWindowFocus: false, // Prevents automatic refetching on window focus
  });

  const handleRefetch = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
    await refetch();
    setIsRefreshing(false);
  };

  const filteredData = data
    ? Object.entries(data).filter(([coin]) => coin.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <input
        type="text"
        placeholder="Search Cryptocurrency"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleRefetch} className="px-4 py-2 bg-blue-500 text-white rounded" disabled={isRefreshing}>
        {isRefreshing ? 'Refreshing...' : 'Refresh'}
      </button>
      {isLoading || isRefreshing ? (
        <p className="text-center mt-4 text-lg font-semibold">Loading latest data...</p>
      ) : (
        <ul className="mt-4">
          {filteredData.map(([coin, price]) => (
            <li key={coin} className="flex justify-between p-2 border-b">
              <span className="font-bold">{coin.toUpperCase()}</span>
              <span>${price.usd}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
