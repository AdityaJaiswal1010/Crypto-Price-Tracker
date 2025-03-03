# Challenges & Solutions

## 1. Handling API Rate Limits
**Challenge:** CoinGecko has rate limits that could prevent frequent updates.
**Solution:** Implemented React Query caching and reduced unnecessary requests.

## 2. Ensuring a Responsive UI
**Challenge:** The app should be usable on both desktop and mobile.
**Solution:** Used Tailwind CSS for fully responsive layouts.

## 3. Efficiently Filtering Data
**Challenge:** Searching for specific cryptocurrencies should be fast and responsive.
**Solution:** Implemented Zustand for instant search updates without re-fetching data.

## 4. Providing a Smooth User Experience
**Challenge:** The UI should not freeze while fetching data.
**Solution:** Added a loading indicator and introduced a small delay before displaying new prices.