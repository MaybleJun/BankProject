import Sign from "../../components/Sign/Sign";
import {  useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { AppState } from "../../store/store";
import "./documentSigning.scss";

const DocumentSigning = () => {
    const currentStep =  useSelectorTyped((state: AppState) => state.loan.currentStep);
    return (
        <section>
            <div className="DocumentSigning">
                {currentStep === 4 ? (
                    <Sign />
                ) : (
                    <div className="SigningDecision">
                        <h3 className="SigningDecision__title">Documents have been successfully signed and sent for approval</h3>
                        <p className="SigningDecision__text">Within 10 minutes you will be sent a PIN code to your email for confirmation</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DocumentSigning;