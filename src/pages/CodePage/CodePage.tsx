import "./CodePage.scss";
import { useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { AppState } from "../../store/store";
import useStepNavigation from "../../hooks/useStepNavigation";
import { Button } from "../../components/Button/Button";
import OfferImage from "../../assets/prescrongFormimg.png";
import { CodeInput } from "../../ui/CodeInput/CodeInput";

const CodePage = () => {
    const currentStep = useSelectorTyped((state: AppState) => state.loan.currentStep);
    const navigateToCurrentStep = useStepNavigation();
    
    return (
        <section>
            <div className="CodePage">
                {currentStep === 5 ? (
                    <CodeInput numberOfInputs={4} />
                ) : (
                    <section className="CodeDicision">
                        <img className="CodeDecision__img"src={OfferImage} alt="Offer" />
                         <h3 className="CodeDicision__title">Congratulations! You have completed your new credit card.</h3>
                         <p className="CodeDicision__text">Your credit card will arrive soon. Thank you for choosing us!</p>
                         <Button 
                            className="Button CodeDicision__button"
                            onClick={() => navigateToCurrentStep()}
                            >
                             View other offers of our bank
                        </Button>
                    </section>
                )}
            </div>
        </section>
    );
};

export default CodePage;