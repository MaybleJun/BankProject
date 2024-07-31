import React, { MutableRefObject } from 'react';
import { useSelectorTyped } from '../../hooks/useTypeReduxStore';
import { LoanPrescoringStatusEnum } from "../../models/loanPrescoringStatusEnum";
import { AppState } from "../../store/store";
import { PrescoringForm } from '../PrescoringForm/PrescoringForm';
import "./PrescoringStatus.scss";
import { Loader } from '../Loader/Loader';

interface PrescoringStatusProps {
    loanFormRef: MutableRefObject<HTMLDivElement | null>;
}

const PrescoringStatus: React.FC<PrescoringStatusProps> = ({ loanFormRef }) => {
    const loanPrescoringStatus = useSelectorTyped((state: AppState) => state.loan.loanPrescoringStatus);
    const isProcessing = useSelectorTyped((state: AppState) => state.loan.isProcessing);

    return (
        <div className="card-status" ref={loanFormRef}>
            {isProcessing && (
                <Loader/>
            )}
            {loanPrescoringStatus === LoanPrescoringStatusEnum.Form && <PrescoringForm />}
            {/* {loanPrescoringStatus === LoanStatusEnum.Offers && <PrescoringOffers />}
            {loanPrescoringStatus === LoanStatusEnum.Decision && <PrescoringDecision />} */}
        </div>
    );
};

export default PrescoringStatus;