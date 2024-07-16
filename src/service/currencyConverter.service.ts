import axios from 'axios'
import { ExchangeRates, ICurrencyConverter } from '../types/CurrencyConverter.type'

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

export const fetchRates = async (baseCurrency: string): Promise<ExchangeRates> => {
  const response = await axios.get(`${API_URL}/${API_KEY}/latest/${baseCurrency}`)
  return response.data.conversion_rates
}

export const convertCurrency = (converter: ICurrencyConverter): number => {
  const { amount, fromCurrency, toCurrency, exchangeRates } = converter
  if (!exchangeRates[toCurrency]) {
    throw new Error(`Обменный курс для ${toCurrency} недоступен.`)
  }
  const fromRate = exchangeRates[fromCurrency]
  const toRate = exchangeRates[toCurrency]
  return (amount / fromRate) * toRate
}
