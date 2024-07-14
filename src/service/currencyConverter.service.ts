import axios from "axios";


export class CurrencyConverterService {
    private static API_KEY = process.env.REACT_APP_API_KEY
    
    public static async getExchangeRates(){
        const response = await axios.get(`$https://api.fastforex.io/fetch-all?api_key=${this.API_KEY}`)
        return response.data.results;
    }
}