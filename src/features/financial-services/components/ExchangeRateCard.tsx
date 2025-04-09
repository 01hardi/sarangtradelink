
import React from 'react';

interface ExchangeRate {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}

const ExchangeRateCard: React.FC = () => {
  const exchangeRates: ExchangeRate[] = [
    { fromCurrency: 'GBP', toCurrency: 'USD', rate: 1.27 },
    { fromCurrency: 'GBP', toCurrency: 'EUR', rate: 1.17 },
    { fromCurrency: 'GBP', toCurrency: 'INR', rate: 105.84 },
    { fromCurrency: 'GBP', toCurrency: 'CAD', rate: 1.72 },
    { fromCurrency: 'GBP', toCurrency: 'AUD', rate: 1.90 }
  ];

  return (
    <div className="bg-travel-navy rounded-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4">Current Exchange Rates</h3>
      <p className="text-sm mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="space-y-3">
        {exchangeRates.map((rate, index) => (
          <div key={index} className={`flex justify-between items-center pb-2 ${
            index < exchangeRates.length - 1 ? 'border-b border-gray-600' : ''
          }`}>
            <div className="flex items-center">
              <span className="font-medium">{rate.fromCurrency} → {rate.toCurrency}</span>
            </div>
            <div className="font-bold">{rate.rate}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-300">
        *Rates are indicative only and subject to change.
      </div>
    </div>
  );
};

export default ExchangeRateCard;
