import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoanPrescoringStatusEnum } from "../../models/loanPrescoringStatusEnum";
import { IOfferCard } from "../../models/offerCardModel";
import { IPayment } from "../../models/paymentModel";
import { IPrescoringForm } from "../../models/PrescoringForm";
import { ScoringType } from "../../components/ScoringForm/types";
import { StepsEnum } from "../../models/stepsEnum";
import { ApiService } from "../../api/application";
import { AppDispatch } from "../store";

// Интерфейс для состояния кредита
interface LoanState {
    isProcessing: boolean;
    currentStep: StepsEnum;
    loanPrescoringStatus: LoanPrescoringStatusEnum;
    offers: IOfferCard[] | null;
    payments: IPayment[] | null;
    errorMessage: string | null;
    applicationId: number | null;
}

// Начальное состояние
const initialState: LoanState = {
    currentStep: StepsEnum.Step1,
    isProcessing: false,
    loanPrescoringStatus: LoanPrescoringStatusEnum.Form,
    offers: null,
    payments: null,
    errorMessage: null,
    applicationId: null,
};

// Создаем слайс для управления состоянием кредита
const loanSlice = createSlice({
    name: "loan",
    initialState: initialState,
    reducers: {
        setProcessingState: (state, action: PayloadAction<boolean>) => {
            state.isProcessing = action.payload;
        },

        updateCurrentStep: (state, action: PayloadAction<StepsEnum>) => {
            state.currentStep = action.payload;
        },

        processFormSuccess: (state, action: PayloadAction<IOfferCard[]>) => {
            state.offers = action.payload;
            state.applicationId = action.payload[0].applicationId;
            state.loanPrescoringStatus = LoanPrescoringStatusEnum.Offers;
            state.isProcessing = false;
        },

        processOfferSuccess: (state) => {
            state.loanPrescoringStatus = LoanPrescoringStatusEnum.Decision;
            state.isProcessing = false;
        },

        resetLoanState: () => initialState,

        updatePaymentsSuccess: (state, action: PayloadAction<IPayment[]>) => {
            state.currentStep = StepsEnum.Step3;
            state.payments = action.payload;
        },

        setErrorMessage: (state, action: PayloadAction<string | null>) => {
            state.errorMessage = action.payload;
        },
    },
});

// Экспорт редуктора
export default loanSlice.reducer;

// Экспорт действий
export const { processFormSuccess, setProcessingState, processOfferSuccess, resetLoanState, updateCurrentStep, updatePaymentsSuccess, setErrorMessage } = loanSlice.actions;

// Асинхронные действия
export const submitPrescoringForm = (data: IPrescoringForm) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        const response = await ApiService.sendPrescoringForm(data);
        dispatch(processFormSuccess(response.data));
    } catch (e) {
        dispatch(setProcessingState(false));
        console.error((e as Error).message);
    }
};

export const submitScoringForm = (data: ScoringType, applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        await ApiService.registrateApplication(data, applicationId);
        dispatch(updateCurrentStep(StepsEnum.Step3));
        dispatch(setProcessingState(false));
    } catch (e) {
        dispatch(setProcessingState(false));
        console.error((e as Error).message);
    }
};

export const applySelectedOffer = (data: IOfferCard) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        await ApiService.applyApplication(data);
        dispatch(processOfferSuccess());
    } catch (e) {
        dispatch(setProcessingState(false));
        console.error((e as Error).message);
    }
};

export const fetchPaymentList = (applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        const response = await ApiService.getPaymentList(applicationId);
        dispatch(updatePaymentsSuccess(response.data.credit.paymentSchedule));
        dispatch(setProcessingState(false));
    } catch (e) {
        dispatch(setProcessingState(false));
        console.error((e as Error).message);
    }
};

export const generateDocuments = (applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        await ApiService.createDocuments(applicationId);
        dispatch(updateCurrentStep(StepsEnum.Step4));
        dispatch(setProcessingState(false));
    } catch (e) {
        dispatch(setProcessingState(false));
        console.error((e as Error).message);
    }
};

export const signGeneratedDocuments = (applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        await ApiService.signDocuments(applicationId);
        dispatch(updateCurrentStep(StepsEnum.Step5));
        dispatch(setProcessingState(false));
    } catch (e) {
        dispatch(setProcessingState(false));
        console.error((e as Error).message);
    }
};

export const confirmCode = (applicationId: string, code: string) => async (dispatch: AppDispatch) => {
    dispatch(setProcessingState(true));
    try {
        await ApiService.sendCode(applicationId, code);
        dispatch(resetLoanState());
    } catch (e) {
        dispatch(setProcessingState(false));
        dispatch(setErrorMessage("Invalid confirmation code"));
        console.error((e as Error).message);
    }
};
