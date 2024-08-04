import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { generateDocuments,fetchPaymentList, resetLoanState } from "../../store/slice/loanSlice";
import { AppState } from "../../store/store";
import { Button } from '../../components/Button/Button';
import { Loader } from "../Loader/Loader";
import Table from "../../ui/Table/Table";
import { Modal } from "../../ui/Modal/Modal";
import { Popup } from "../../ui/Popup/Popup";
import { Checkbox } from "../../ui/Checkbox/Checkbox";

import "./TableDocument.scss";

const columns = ["NUMBER", "DATE", "TOTAL PAYMENT", "INTEREST PAYMENT", "DEBT PAYMENT", "REMAINING DEBT"];

const TableDocument = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { applicationId } = useParams();
    const isSending = useSelectorTyped((state: AppState) => state.loan.isProcessing);
    const paymentList = useSelectorTyped((state: AppState) => state.loan.payments);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
    const [isUserAgree, setIsUserAgree] = useState<boolean>(false);

    useEffect(() => {
        if (paymentList === null) dispatch(fetchPaymentList(applicationId as string));
    }, []);

    return (
        <section>
            {isSending && <Loader />}
            <div className="table-wrapper">
                <div className="table-wrapper__header">
                    <h3>Payment Schedule</h3>
                    <p>Step 3 of 5</p>
                </div>
                {paymentList ? <Table columns={columns} data={paymentList} /> : <Loader />}
                <div className="table-wrapper__bottom">
                        <Button className="Button table-wrapper__bottom__BtnDeny" onClick={() => setIsModalOpened(true)}>
                            Deny
                         </Button>
                    <div className="table-wrapper__bottom__checks">
                    <Checkbox setIsChecked={setIsUserAgree} labelText="I agree with the payment schedule" isChecked={isUserAgree} />
                        <Button
                            className="Button table-wrapper__bottom__BtnSend"
                             disabled={!isUserAgree}
                            onClick={() => {
                            if (applicationId) {
                                dispatch(generateDocuments(applicationId));
                            }
                             }}
                        >
                            Send
                        </Button>

                    </div>
                </div>
            </div>
            <Modal
                title="Deny application"
                message="You exactly sure, you want to cancel this application?"
                onClose={() => setIsModalOpened(false)}
                onClick={() => {
                    setIsModalOpened(false);
                    setIsPopupOpened(true);
                }}
                isOpened={isModalOpened}
            />
            <Popup
                title="Deny application"
                message="Your application has been deny!"
                isOpened={isPopupOpened}
                onClose={() => {
                    dispatch(resetLoanState());
                    navigate("/");
                    setIsPopupOpened(false);
                }}
            />
        </section>
    );
};

export default TableDocument;