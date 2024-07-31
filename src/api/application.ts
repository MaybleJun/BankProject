import axios from "axios";
import { IOfferCard } from "../models/offerCardModel";
import { IPrescoringForm } from "../models/PrescoringForm";
import { ScoringType } from "../models/scoringModel";

const BASE_URL = "http://localhost:8080/";

export const sendPrescoringForm = async (loan: IPrescoringForm) => {
    try {
        const response = await axios.post(BASE_URL + "application", loan);
        return { data: response.data };
    } catch (error) {
        console.error('Error in sendContactInfo:', error);
        return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
};

const applyApplication = async (offer: IOfferCard) => {
    return await axios.post(BASE_URL + "application/apply", offer);
};

const registrateApplication = async (offer: ScoringType, applicationId: string) => {
    return await axios.put(BASE_URL + `application/registration/${applicationId}`, offer);
};

const getPaymentList = async (applicationId: string) => {
    return await axios.get(BASE_URL + `admin/application/${applicationId}`);
};

const createDocuments = async (applicationId: string) => {
    return await axios.post(BASE_URL + `document/${applicationId}`);
};

const signDocuments = async (applicationId: string) => {
    return await axios.post(BASE_URL + `document/${applicationId}/sign`);
};

const sendCode = async (applicationId: string, code: string) => {
    return await axios.post(BASE_URL + `document/${applicationId}/sign/code`, JSON.stringify(code), {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const ApiService = {
    sendPrescoringForm,
    applyApplication,
    registrateApplication,
    getPaymentList,
    createDocuments,
    signDocuments,
    sendCode,
};
