import axios from "axios";

const BASE_URL = "http://localhost:8080";
const HEADERS = {
  "Content-Type": "application/json",
};

export const EMAIL_ENDPOINT = `${BASE_URL}/email`;
export const APPLICATION_ENDPOINT = `${BASE_URL}/application`;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});