import React, { useEffect } from "react";
import "./ScoringPage.scss";
import { useAppDispatch, useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { AppState } from "../../store/store";
import { updateCurrentStep } from "../../store/slice/loanSlice";


const ScoringPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentStep = useSelectorTyped((state: AppState) => state.loan.currentStep);

    useEffect(() => {
        if (currentStep === 1) dispatch(updateCurrentStep(2));
    }, [currentStep, dispatch]);

    return (
        <div className="scoring-page">
            {/* {currentStep === 2 ? (
                <ScoringForm />
            ) : (
                <div className="loan-message">
                    <h2>Wait for a decision on the application</h2>
                    <p>The answer will come to your mail within 10 minutes</p>
                </div>
            )} */}
        </div>
    );
};

export default ScoringPage;
