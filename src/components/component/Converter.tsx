import React, { useState, useEffect, ChangeEvent } from "react"
import { Input } from "@/components/ui/input.tsx"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select.tsx"
import { Button } from "@/components/ui/button.tsx"
import { fetchRates, convertCurrency } from '../../service/currencyConverter.service'
import { ICurrencyConverter } from '../../types/CurrencyConverter.type'

export function Converter() {
  const [converter, setConverter] = useState<ICurrencyConverter>({
    amount: 0,
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    exchangeRates: {}
  })
  const [convertedAmount, setConvertedAmount] = useState<number>(0)

  useEffect(() => {
    const getRates = async () => {
      try {
        const rates = await fetchRates(converter.fromCurrency)
        setConverter(prev => ({ ...prev, exchangeRates: rates }))
      } catch (error) {
        console.error('Ошибка при получении курсов:', error)
      }
    }
    getRates()
  }, [converter.fromCurrency])

  const handleConvert = () => {
    try {
      const result = convertCurrency(converter)
      setConvertedAmount(result)
    } catch (error) {
      console.error('Ошибка при конвертации валюты:', error)
    }
  }

  const handleSwapCurrencies = () => {
    setConverter(prev => ({
      ...prev,
      fromCurrency: prev.toCurrency,
      toCurrency: prev.fromCurrency
    }))
  }

  const handleFromCurrencyChange = (value: string) => {
    setConverter(prev => ({ ...prev, fromCurrency: value }))
  }

  const handleToCurrencyChange = (value: string) => {
    setConverter(prev => ({ ...prev, toCurrency: value }))
  }

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConverter(prev => ({ ...prev, amount: parseFloat(e.target.value) }))
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Конвертер валют</h1>
        <div className="w-full max-w-md">
          <div className="grid gap-4">
            <Input
              type="number"
              placeholder="Введите сумму"
              className="text-2xl"
              value={converter.amount.toString()}
              onChange={handleAmountChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <Select value={converter.fromCurrency} onValueChange={handleFromCurrencyChange}>
                <SelectTrigger aria-label="Исходная валюта">
                  <SelectValue placeholder="Исходная валюта" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(converter.exchangeRates).map(currency => (
                    <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={converter.toCurrency} onValueChange={handleToCurrencyChange}>
                <SelectTrigger aria-label="Целевая валюта">
                  <SelectValue placeholder="Целевая валюта" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(converter.exchangeRates).map(currency => (
                    <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="justify-center" onClick={handleSwapCurrencies}>
              <ReplaceIcon className="h-6 w-6 mr-2" />
              Поменять местами
            </Button>
            <Button className="w-full" onClick={handleConvert}>Конвертировать</Button>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{convertedAmount.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ReplaceIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4c0-1.1.9-2 2-2" />
      <path d="M20 2c1.1 0 2 .9 2 2" />
      <path d="M22 8c0 1.1-.9 2-2 2" />
      <path d="M16 10c-1.1 0-2-.9-2-2" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
      <rect width="8" height="8" x="2" y="14" rx="2" />
    </svg>
  )
}
