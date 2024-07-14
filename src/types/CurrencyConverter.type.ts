export interface ExchangeRates {
  [key: string]: number
}

export interface ICurrencyConverter {
  amount: number
  fromCurrency: string
  toCurrency: string
  exchangeRates: ExchangeRates
}