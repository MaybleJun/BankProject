import axios from 'axios';

export const NEWS_REEL_ENDPOINT = 'https://newsapi.org/v2/top-headlines';
export const API_KEY_VALUE = '62a96fce40dd43e0a25d0a13ada88817';
export const REQUEST_HEADERS = {
    'X-Api-Key': API_KEY_VALUE,
};

export const TARGET_COUNTRY = 'us';
export const NEWS_CATEGORY = 'business';
export const RESULTS_LIMIT = 30;
export const REQUEST_TIMEOUT = 4000;
export const REQUEST_PARAMETERS = {
    country: TARGET_COUNTRY,
    category: NEWS_CATEGORY,
    pageSize: RESULTS_LIMIT,
    timeout: REQUEST_TIMEOUT,
};

export const fetchNewsReel = function (controller?: AbortController) {
    return axios
        .get(NEWS_REEL_ENDPOINT, {
            headers: REQUEST_HEADERS,
            params: REQUEST_PARAMETERS,
            signal: controller?.signal,
        })
        .then((response) => response.data);
};
