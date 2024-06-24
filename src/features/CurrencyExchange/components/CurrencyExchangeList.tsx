import React, { useEffect, useState } from 'react';

import { convertMinutesToMilliseconds } from '../../../utils/convertMinutesToMilliseconds';
import { DEFAULT_CURRENCY_PAIRS } from '../api/api';
import { getCurrencyCoursesList, TCurrencyConverterListItem as CurrencyListItem } from '../helpers/getCurrencyCoursesList';
import './CurrencyExchangeList.scss';

type ExchangeRatesListProps = {
    params?: { baseCurrency: string; targetCurrency: string }[];
    updateIntervalMinutes?: number;
};

const ExchangeRatesList: React.FC<ExchangeRatesListProps> = ({
    params = DEFAULT_CURRENCY_PAIRS,
    updateIntervalMinutes = 15,
}) => {
    const [rates, setRates] = useState<CurrencyListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const updateIntervalMs = convertMinutesToMilliseconds(updateIntervalMinutes);

    useEffect(() => {
        const controller = new AbortController();

        const fetchRates = async () => {
            try {
                setLoading(true);
                const fetchedRates = await getCurrencyCoursesList(params, controller);
                if (!controller.signal.aborted) {
                    setRates(fetchedRates);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchRates();

        const listUpdateIntervalId = setInterval(() => {
            fetchRates();
        }, updateIntervalMs);

        return () => {
            controller.abort();
            clearInterval(listUpdateIntervalId);
        };
    }, [params, updateIntervalMs]);

    return (
        <ul className="CurrencyExchangeList">
            {loading ? (
                <div>Loading...</div>
            ) : (
                rates.map(({ from, rate, key }) => (
                    <li key={key}>
                        <span className="CurrencyExchangeList__currency">
                            {from}
                            :
                        </span>
                        {' '}
                        {rate}
                    </li>
                ))
            )}
        </ul>
    );
};

export default ExchangeRatesList;
