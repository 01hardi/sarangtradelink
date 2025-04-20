import React, { useEffect, useState } from 'react';
interface ExchangeRate {
  toCurrency: string;
  rate: number;
}
const CURRENCIES = ['USD', 'EUR', 'INR', 'CAD', 'AUD'];
const ExchangeRateCard: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[] | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch('https://open.er-api.com/v6/latest/GBP').then(res => res.json()).then(data => {
      if (data.result !== 'success' || !data.rates) {
        throw new Error("API Error");
      }
      const rates: ExchangeRate[] = CURRENCIES.map(curr => ({
        toCurrency: curr,
        rate: Number(data.rates[curr]) || 0
      }));
      setExchangeRates(rates);
      setLastUpdated(data.time_last_update_utc?.split(' ').slice(0, 4).join(' ') || null);
      setError(null);
    }).catch(() => {
      setError('Failed to load exchange rates.');
      setExchangeRates(null);
    }).finally(() => setLoading(false));
  }, []);
  return <div className="rounded-lg p-6 text-white transition-all duration-700 backdrop-blur-lg bg-opacity-80 shadow-lg bg-gray-950">
      <h3 className="text-xl font-bold mb-4">Current Exchange Rates</h3>
      <p className="text-sm mb-4">
        {lastUpdated ? `Last updated: ${lastUpdated}` : ''}
      </p>
      {loading ? <div className="py-8 flex justify-center">
          <span className="animate-pulse">Loading...</span>
        </div> : error ? <div className="py-8 text-red-200">{error}</div> : <div className="space-y-3">
          {exchangeRates?.map((rate, index) => <div key={rate.toCurrency} className={`flex justify-between items-center pb-2 ${index < CURRENCIES.length - 1 ? 'border-b border-gray-600' : ''}`}>
              <div className="flex items-center">
                <span className="font-medium">GBP → {rate.toCurrency}</span>
              </div>
              <div className="font-bold">{rate.rate.toFixed(3)}</div>
            </div>)}
        </div>}
      <div className="mt-4 text-xs text-gray-300">
        *Rates are indicative only and subject to change.
      </div>
    </div>;
};
export default ExchangeRateCard;