import { useCallback, FC, memo } from "react";
import { useAppDispatch, useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { IOfferCard } from "../../models/offerCardModel";
import {  resetLoanState, applySelectedOffer } from "../../store/slice/loanSlice";
import { AppState } from "../../store/types";
import "./PrescoringOffers.scss";
import PrsecoringOfferImage from "../../assets/prescrongFormimg.png";
import SuccessIcon from '../../assets/Close_round_fill.svg';
import ErrorIcon from '../../assets/Check_fill.svg';
import { Button } from '../../components/Button/Button';

interface IOfferCardProps {
    onSelectClick: (offer: IOfferCard) => void;
    resetLoanState: () => void;
    offer: IOfferCard;
}

const OfferCard: FC<IOfferCardProps> = memo(({ onSelectClick, resetLoanState, offer }) => {
    const {
        requestedAmount,
        totalAmount,
        term,
        monthlyPayment,
        rate,
        isInsuranceEnabled,
        isSalaryClient,
    } = offer;

    return (
        <div className="Offer-card">
            <div className="Offer-card__info">
                <img className="Offer-card__info__image" src={PrsecoringOfferImage} alt="surprise image" />
                <p>Requested amount: {requestedAmount}</p>
                <p>Total amount: {totalAmount} ₽</p>
                <p>For {term} months</p>
                <p>Monthly payment: {monthlyPayment} ₽</p>
                <p>Your rate: {rate}%</p>
                <p>
                    Insurance included {isInsuranceEnabled ? 
                    <SuccessIcon 
                    className="Offer-card__icon"
                    width={20} 
                    height={20} 
                    /> 
                    : 
                    <ErrorIcon 
                    className="Offer-card__icon"
                    width={20}
                    height={20} />
                    }
                </p>
                <p>
                    Salary client {isSalaryClient ? <SuccessIcon className="offer-card__icon" /> : <ErrorIcon className="offer-card__icon" />}
                </p>
            </div>
            <Button
                className="Button Offer-card__button"
                type="button"
                onClick={() => {
                    onSelectClick(offer);
                    resetLoanState();
                }}
            >
                Select
            </Button>
        </div>
    );
});

const PrescoringOffers = () => {
    const dispatch = useAppDispatch();
    const offersList = useSelectorTyped((state: AppState) => state.loan.offers);

    const selectOffer = useCallback(
        (offer: IOfferCard) => {
            dispatch(applySelectedOffer(offer));
        },
        [dispatch]
    );

    const handleResetLoan = useCallback(() => {
        dispatch(resetLoanState());
    }, [dispatch]);

    return (
        <div className="offers">
            {offersList?.map((offer) => (
                <OfferCard key={`${offer.applicationId}${offer.monthlyPayment}`} offer={offer} onSelectClick={selectOffer}  resetLoanState={handleResetLoan} />
            ))}
        </div>
    );
};

export default PrescoringOffers;
