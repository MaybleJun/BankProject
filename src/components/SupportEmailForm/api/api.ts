// api.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SupportEmailFormProps } from '../types';

const API_BASE_URL = 'http://localhost:8080';
const NEWSLETTER_ENDPOINT = '/email';

const createAxiosInstance = (baseURL: string): AxiosInstance => axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const apiClient = createAxiosInstance(API_BASE_URL);

export const sendNewsletterEmail = async (data: SupportEmailFormProps)
: Promise<AxiosResponse | undefined> => {
    try {
        const response: AxiosResponse = await apiClient.post(NEWSLETTER_ENDPOINT, data);
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        console.error(`Request failed with status ${response.status}: ${response.statusText}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Error occurred while posting email: ${error.message}`);
        } else {
            console.error(`Unexpected error: ${error}`);
        }
    }
    return undefined;
};
