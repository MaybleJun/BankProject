import "./Sign.scss";
import docs from "../../assets/File_dock.png";
import { useState } from "react";
import { useAppDispatch, useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { signGeneratedDocuments } from "../../store/slice/loanSlice";
import { useParams } from "react-router-dom";
import { AppState } from "../../store/store";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import offerPdf from "../../assets/pdf/credit-card-offer.pdf"

const Sign = () => {
    const { applicationId } = useParams();
    const dispatch = useAppDispatch();
    const isProcessing = useSelectorTyped((state: AppState) => state.loan.isProcessing);
    const [isUserAgree, setIsUserAgree] = useState<boolean>(false);

    return (
        <div className="Signing">
            {isProcessing && <Loader />}
            <div className="Signing__header">
                <h3>Signing of documents</h3>
                <span>Step 4 of 5</span>
            </div>
            <p>
                Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information
                of a professional participant in the securities market. Information about persons under whose control or significant influence the
                Partner Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to
                a credit history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form
                of consent to the processing of personal data.
            </p>
            <a className="Signing__docs"
              href={offerPdf}
              target="_blank"
              rel="noreferrer"
            >
                <img src={docs} alt="docs" />
                <span>Information on your card</span>
            </a>
            <div className="Signing__bottom">
                <Checkbox  labelText ="I agree" setIsChecked={setIsUserAgree} isChecked={isUserAgree} />
                <Button
                    className="Button Signing__button"
                    type="submit"
                    disabled={!isUserAgree}
                    onClick={() => dispatch(signGeneratedDocuments(applicationId as string))}
                >
                 {isProcessing ? <Loader className="Signing__loader" /> : 'Send'}
            </Button>
            </div>
        </div>
    );
};

export default Sign;