import React, { MutableRefObject } from 'react';
import { useSelectorTyped } from '../../hooks/useTypeReduxStore';
import { LoanPrescoringStatusEnum } from "../../models/loanPrescoringStatusEnum";
import { AppState } from "../../store/store";
import { PrescoringForm } from '../PrescoringForm/PrescoringForm';
import  PrescoringDecision  from '../PrescoringDecision/PrescoringDecision';
import  PrescoringOffers  from '../PrescoringOffers/PrescoringOffers';
import "./PrescoringStatus.scss";
import { Loader } from '../Loader/Loader';

interface PrescoringStatusProps {
    loanFormRef: MutableRefObject<HTMLDivElement | null>;
}

const PrescoringStatus: React.FC<PrescoringStatusProps> = ({ loanFormRef }) => {
    const loanPrescoringStatus = useSelectorTyped((state: AppState) => state.loan.loanPrescoringStatus);
    const isProcessing = useSelectorTyped((state: AppState) => state.loan.isProcessing);

    console.log('loanPrescoringStatus:', loanPrescoringStatus);

    return (
        <div className="card-status" ref={loanFormRef}>
            {isProcessing && (
                <Loader/>
            )}
            {loanPrescoringStatus === LoanPrescoringStatusEnum.Form && <PrescoringForm /> }
            {loanPrescoringStatus === LoanPrescoringStatusEnum.Offers && <PrescoringOffers />}
            {loanPrescoringStatus === LoanPrescoringStatusEnum.Decision && <PrescoringDecision />} 
        </div>
    );
};

export default PrescoringStatus;