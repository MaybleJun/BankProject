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
    const isProcessing = useSelectorTyped((state: AppState) => state.loan.isProcessing);
    const error = useSelectorTyped((state: AppState) => state.loan.errorMessage);
    const { applicationId } = useParams<{ applicationId: string }>();

    // Refs для каждого ввода и состояние для буквенных значений в каждом вводе
    const inputRefs = Array.from({ length: numberOfInputs }, () => createRef<HTMLInputElement>());
    const [letters, setLetters] = useState<string[]>(Array.from({ length: numberOfInputs }, () => ""));
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Обработка отправки кода при вводе последнего символа
    useEffect(() => {
        if (letters[numberOfInputs - 1] !== "") {
            const code = parseInt(letters.join(""));
            setTimeout(() => {
                dispatch(confirmCode(applicationId, code.toString()));
            }, 500);
        }
    }, [letters, dispatch, applicationId, numberOfInputs]);

    // Обработчик нажатия клавиш для переключения между полями ввода
    const handleKeyPress = (key: string) => {
        setCurrentIndex((prevIndex) => {
            let nextIndex: number;
            if (key === "Backspace") {
                nextIndex = prevIndex === 0 ? 0 : prevIndex - 1;
            } else {
                nextIndex = prevIndex < numberOfInputs - 1 ? prevIndex + 1 : numberOfInputs - 1;
            }
            const nextInput = inputRefs[nextIndex]?.current;
            nextInput?.focus();
            nextInput?.select();
            return nextIndex;
        });
    };

    // Эффект для установки фокуса на первое поле ввода и добавления слушателя клавиш
    useEffect(() => {
        if (inputRefs[0]?.current) {
            inputRefs[0].current.focus();
        }
        const keyUpHandler = ({ key }: KeyboardEvent) => handleKeyPress(key);
        window.addEventListener("keyup", keyUpHandler);
        return () => {
            window.removeEventListener("keyup", keyUpHandler);
        };
    }, [inputRefs]);

    return (
        <div className="CodeInput">
            <h3>Please enter confirmation code</h3>
            <div className="CodeInput__wrapper">
                {inputRefs.map((ref, index) => (
                    <input
                        key={`input-${index}`}
                        className="CodeInput__input"
                        ref={ref}
                        type="tel"
                        placeholder="0"
                        value={letters[index]}
                        maxLength={1}
                        onChange={(e) => {
                            const { value } = e.target;
                            setLetters((prevLetters) =>
                                prevLetters.map((letter, letterIndex) => (letterIndex === index ? value : letter))
                            );
                        }}
                        onClick={() => {
                            inputRefs[currentIndex]?.current?.focus();
                            inputRefs[currentIndex]?.current?.select();
                        }}
                    />
                ))}
            </div>
            {isProcessing && (
                <div>
                    <Loader />
                </div>
            )}
            {error && <span className="CodeInput__error">{error}</span>}
        </div>
    );
};

