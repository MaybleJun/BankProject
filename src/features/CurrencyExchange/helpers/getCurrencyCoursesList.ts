import { currencyApi, ExchangeRateParams } from '../api/api';

export type TCurrencyConverterListItem = {
    from: string;
    rate: string;
    key: string;
};

export async function getCurrencyCoursesList(
    exchangeRateParams: ExchangeRateParams[],
    abortController?: AbortController,
) {
    try {
        const responses = await currencyApi.fetchExchangeRates(exchangeRateParams, abortController);

        const exchangeRatesList = responses.map((response, index) => {
            const { baseCurrency, targetCurrency } = exchangeRateParams[index];
            const key = `${baseCurrency}-${targetCurrency}`;

            if (response.status === 'fulfilled') {
                const rate = typeof response.value === 'number' ? response.value.toFixed(2) : '...';
                return { from: baseCurrency, rate, key };
            }
            console.error(`Error fetching exchange rate for ${baseCurrency}-${targetCurrency}:`, response.reason);
            return { from: baseCurrency, rate: '...', key };
        });

        return exchangeRatesList;
    } catch (error) {
        console.error('Error fetching currency courses:', error);
        throw error;
    }
}
