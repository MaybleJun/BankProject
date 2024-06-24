import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://currency-exchange.p.rapidapi.com/';
const RAPIDAPI_KEY = '24d7b7d756msh09fd24a70ecef20p11a39fjsnaf372193855d';
const RAPIDAPI_HOST = 'currency-exchange.p.rapidapi.com';
const REQUEST_TIMEOUT = 5000;

const API_HEADERS = {
    'x-rapidapi-key': RAPIDAPI_KEY,
    'x-rapidapi-host': RAPIDAPI_HOST,
};

const ENDPOINTS = {
    CURRENCIES_LIST: 'listquotes',
    RATE_EXCHANGE: 'exchange',
};

export const DEFAULT_CURRENCY_PAIRS = [
    { baseCurrency: 'USD', targetCurrency: 'RUB' },
    { baseCurrency: 'EUR', targetCurrency: 'RUB' },
    { baseCurrency: 'CNH', targetCurrency: 'RUB' },
    { baseCurrency: 'JPY', targetCurrency: 'RUB' },
    { baseCurrency: 'GBP', targetCurrency: 'RUB' },
    { baseCurrency: 'SGD', targetCurrency: 'RUB' },
];

const currencyApiInstance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: API_HEADERS,
    timeout: REQUEST_TIMEOUT,
});

export type ExchangeRateParams = {
  baseCurrency: string;
  targetCurrency: string;
  amount?: string;
};

const fetchAllCurrencies = async (controller?: AbortController) => {
    try {
        const response = await currencyApiInstance.get(ENDPOINTS.CURRENCIES_LIST, {
            signal: controller?.signal,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching currencies:', error);
        throw error;
    }
};

const fetchExchangeRate = async (
    params: ExchangeRateParams,
    controller?: AbortController,
) => {
    try {
        const { baseCurrency, targetCurrency, amount = '1.0' } = params;
        const response = await currencyApiInstance.get(ENDPOINTS.RATE_EXCHANGE, {
            signal: controller?.signal,
            params: {
                from: baseCurrency,
                to: targetCurrency,
                q: amount,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
};

const fetchExchangeRates = async (
    params: ExchangeRateParams[],
    controller?: AbortController,
) => {
    try {
        const promises = params.map((param) => fetchExchangeRate(param, controller));
        return await Promise.allSettled(promises);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};

export const currencyApi = {
    fetchAllCurrencies,
    fetchExchangeRate,
    fetchExchangeRates,
};
