import React from "react";
import { Input } from "@/components/ui/input.tsx";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select.tsx";
import { Button } from "@/components/ui/button.tsx";


export function Converter(): JSX.Element {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Currency Converter</h1>
        <div className="w-full max-w-md">
          <div className="grid gap-4">
            <Input type="number" placeholder="Enter amount" className="text-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <Select>
                <SelectTrigger aria-label="Source currency">
                  <SelectValue placeholder="Source currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="JPY">JPY</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="AUD">AUD</SelectItem>
                  <SelectItem value="CAD">CAD</SelectItem>
                  <SelectItem value="CHF">CHF</SelectItem>
                  <SelectItem value="CNY">CNY</SelectItem>
                  <SelectItem value="SEK">SEK</SelectItem>
                  <SelectItem value="NZD">NZD</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger aria-label="Target currency">
                  <SelectValue placeholder="Target currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="JPY">JPY</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="AUD">AUD</SelectItem>
                  <SelectItem value="CAD">CAD</SelectItem>
                  <SelectItem value="CHF">CHF</SelectItem>
                  <SelectItem value="CNY">CNY</SelectItem>
                  <SelectItem value="SEK">SEK</SelectItem>
                  <SelectItem value="NZD">NZD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="justify-center">
              <ReplaceIcon className="h-6 w-6 mr-2" />
              Swap
            </Button>
            <Button className="w-full">Convert</Button>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ReplaceIcon(props: IconProps): JSX.Element {
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
  );
}

