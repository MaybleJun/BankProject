
import { useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { AppState } from "../../store/store";
import TableDocument from "../../components/TableDocument/TableDocument";
import "./PaymentPage.scss";

const PaymentPage = () => {
    const currentStep = useSelectorTyped((state: AppState) => state.loan.currentStep);
    return (
            <section className="Payment">
                {currentStep === 3 ? (
                    <TableDocument />
                ) : (
                    <div className="PaymentDecision">
                    <h2 className="PaymentDecision__title">Documents are formed</h2>
                    <p className="PaymentDecision__text">Documents for signing will be sent to your email</p>
                </div>
                )}
            </section>
    );
};

export default PaymentPage;