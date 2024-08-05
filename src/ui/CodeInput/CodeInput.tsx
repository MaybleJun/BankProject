import { createRef, FC, RefObject, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useAppDispatch, useSelectorTyped } from "../../hooks/useTypeReduxStore";
import { confirmCode } from "../../store/slice/loanSlice";
import { AppState } from "../../store/store";
import "./CodeInput.scss";

interface CodeInputProps {
    numberOfInputs: number;
}

export const CodeInput: FC<CodeInputProps> = ({ numberOfInputs }) => {
    const dispatch = useAppDispatch();
    const isSending = useSelectorTyped((state: AppState) => state.loan.isProcessing);
    const error = useSelectorTyped((state: AppState) => state.loan.errorMessage);
    const { applicationId } = useParams();
    const [inputRefsArray] = useState<RefObject<HTMLInputElement>[]>(() => Array.from({ length: numberOfInputs }, () => createRef()));
    const [letters, setLetters] = useState<string[]>(() => Array.from({ length: numberOfInputs }, () => ""));
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (letters[numberOfInputs - 1] !== "") {
            console.log(parseInt(letters.join("")));
            setTimeout(() => {
                dispatch(confirmCode(applicationId as string, letters.join("")));
            }, 500);
        }
    }, [letters]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const { key } = e;
        if (key === "Backspace") {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex < numberOfInputs - 1 ? prevIndex + 1 : numberOfInputs - 1));
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (value.length > 1) return; // Ignore inputs longer than 1 character
        setLetters((letters) => letters.map((letter, letterIndex) => (letterIndex === index ? value : letter)));
        if (value.length === 1 && index < numberOfInputs - 1) {
            inputRefsArray[index + 1]?.current?.focus();
        }
    };

    useEffect(() => {
        if (inputRefsArray?.[0]?.current) {
            inputRefsArray[0].current.focus();
        }
    }, []);

    return (
        <div className="CodeInput">
            <h3>Please enter confirmation code</h3>
            <div className="CodeInput__wrapper">
                {inputRefsArray.map((ref, index) => (
                    <input
                        className="CodeInput__input"
                        ref={ref}
                        type="tel"
                        placeholder="O"
                        key={`box${index}-1`}
                        onChange={(e) => handleInput(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onClick={() => {
                            inputRefsArray?.[currentIndex]?.current?.focus();
                            inputRefsArray?.[currentIndex]?.current?.select();
                        }}
                        value={letters[index]}
                        maxLength={1}
                    />
                ))}
            </div>
            {isSending && (
                <div>
                    <Loader />
                </div>
            )}
            {error && <span className="CodeInput__error">{error}</span>}
        </div>
    );
};
