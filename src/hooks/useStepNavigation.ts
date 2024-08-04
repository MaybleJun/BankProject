import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StepsEnum } from "../models/stepsEnum";
import { AppState } from "../store/store";
import { useSelectorTyped } from "./useTypeReduxStore";

// Определение маппинга для навигации по шагам
const stepNavigationMap: Record<StepsEnum, (appId: number | null) => string> = {
    [StepsEnum.Step1]: () => "/loan",
    [StepsEnum.Step2]: (appId) => `/loan/${appId}`,
    [StepsEnum.Step3]: (appId) => `/loan/${appId}/document`,
    [StepsEnum.Step4]: (appId) => `/loan/${appId}/document/sign`,
    [StepsEnum.Step5]: (appId) => `/loan/${appId}/code`,
};

const useStepNavigation = () => {
    const navigate = useNavigate();

    // Получение текущего шага и идентификатора заявки из состояния
    const currentStep = useSelectorTyped((state: AppState) => state.loan.currentStep);
    const applicationId = useSelectorTyped((state: AppState) => state.loan.applicationId);

    // Callback для навигации на текущий шаг
    const navigateToCurrentStep = useCallback(() => {
        const navigationPath = stepNavigationMap[currentStep](applicationId);
        navigate(navigationPath);
    }, [currentStep, applicationId, navigate]);

    return navigateToCurrentStep;
};

export default useStepNavigation;
