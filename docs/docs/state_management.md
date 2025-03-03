# State Management

## Why React Query?
- Efficiently manages API calls and caching.
- Reduces redundant network requests.
- Ensures real-time updates with background refetching.

## Why Zustand?
- Simple, lightweight state management for UI interactions.
- Used for search functionality.

### Zustand Store Implementation
```ts
import { create } from 'zustand';

const useCryptoStore = create((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));

export default useCryptoStore;
```

### React Query Usage in API Calls
```ts
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '../services/cryptoService';

const { data, isLoading, refetch } = useQuery({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
  staleTime: 60000,
});
```