// src/app/stocks/models/stock.models.ts
export interface HistoricalPrice {
  date: string;      // ISO date from backend
  price: number;
}

export interface StockData {
  symbol: string;
  companyName: string;
  currentPrice: number;
  changeAmount: number | null;
  changePercent: number | null;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  previousClose: number;
  volume: number;
  lastUpdated: string;            // ISO date
  historicalPrices?: HistoricalPrice[];
}

export interface AssetDetailDialogData {
  symbol: string;
}
