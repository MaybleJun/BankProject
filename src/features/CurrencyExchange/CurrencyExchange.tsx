import React from 'react';
import './CurrencyExchange.scss';
import { ExchangeRateParams } from './api/api';
import ExchangeRatesList from './components/CurrencyExchangeList';
import { getFormattedLocationDate } from './helpers/getFormattedLocationDate';

import imgBank from '../../assets/imgBank.png';

type TCurrencyExchangeProps = {
  params?: ExchangeRateParams[];
  updateIntervalMinutes?: number;
};

const CurrencyExchange: React.FC<TCurrencyExchangeProps> = ({
    params,
    updateIntervalMinutes = 15,
}: TCurrencyExchangeProps) => {
    const currentCityDate = getFormattedLocationDate();

    return (
        <div className="CurrencyExchange">
            <section className="CurrencyExchange__content-left">
                <h2 className="CurrencyExchange__title">Exchange rate in internet bank</h2>
                <h3 className="CurrencyExchange__desc">Currency</h3>
                <div className="CurrencyExchange__ratesListContainer">
                    <ExchangeRatesList
                        params={params}
                        updateIntervalMinutes={updateIntervalMinutes}
                    />
                </div>
                <button
                    type="button"
                    className="CurrencyExchange__btn"
                    onClick={() => {
                    }}
                >
                    All courses
                </button>
            </section>

            <section className="CurrencyExchange__content-right">
                <p>
                    Last updated: every
                    {' '}
                    {updateIntervalMinutes}
                    {' '}
                    minutes
                    {currentCityDate}
                </p>
                <div className="CurrencyExchange__imgWrapper">
                    <img className="CurrencyExchange__image" src={imgBank} alt="Bank building" />
                </div>
            </section>
        </div>
    );
};

export default CurrencyExchange;
